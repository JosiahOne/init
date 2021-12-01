"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const vscode_1 = require("vscode");

class JupyterProvider {
  /**
   * Returns a Regular Expression used to determine whether a line is a Cell delimiter or not
   *
   * @type {RegExp}
   * @memberOf LanguageProvider
   */
  get cellIdentifier() {
    return /^(# %%|#%%|# \<codecell\>|# In\[\d*?\]|# In\[ \])(.*)/i;
  }
  /**
   * Returns the selected code
   * If not implemented, then the currently active line or selected code is taken.
   * Can be implemented to ensure valid blocks of code are selected.
   * E.g if user selects only the If statement, code can be impelemented to ensure all code within the if statement (block) is returned
   * @param {string} selectedCode The selected code as identified by this extension.
   * @param {Range} [currentCell] Range of the currently active cell
   * @returns {Promise<string>} The code selected. If nothing is to be done, return the parameter value.
   *
   * @memberOf LanguageProvider
   */


  getSelectedCode(selectedCode, currentCell) {
    if (!JupyterProvider.isCodeBlock(selectedCode)) {
      return Promise.resolve(selectedCode);
    } // ok we're in a block, look for the end of the block untill the last line in the cell (if there are any cells)


    return new Promise((resolve, reject) => {
      const activeEditor = vscode_1.window.activeTextEditor;
      const endLineNumber = currentCell ? currentCell.end.line : activeEditor.document.lineCount - 1;
      const startIndent = selectedCode.indexOf(selectedCode.trim());
      const nextStartLine = activeEditor.selection.start.line + 1;

      for (let lineNumber = nextStartLine; lineNumber <= endLineNumber; lineNumber++) {
        const line = activeEditor.document.lineAt(lineNumber);
        const nextLine = line.text;
        const nextLineIndent = nextLine.indexOf(nextLine.trim());

        if (nextLine.trim().indexOf('#') === 0) {
          continue;
        }

        if (nextLineIndent === startIndent) {
          // Return code untill previous line
          const endRange = activeEditor.document.lineAt(lineNumber - 1).range.end;
          resolve(activeEditor.document.getText(new vscode_1.Range(activeEditor.selection.start, endRange)));
        }
      }

      resolve(activeEditor.document.getText(currentCell));
    });
  }
  /**
   * Gets the first line (position) of executable code within a range
   *
   * @param {TextDocument} document
   * @param {number} startLine
   * @param {number} endLine
   * @returns {Promise<Position>}
   *
   * @memberOf LanguageProvider
   */


  getFirstLineOfExecutableCode(document, range) {
    for (let lineNumber = range.start.line; lineNumber < range.end.line; lineNumber++) {
      let line = document.lineAt(lineNumber);

      if (line.isEmptyOrWhitespace) {
        continue;
      }

      const lineText = line.text;
      const trimmedLine = lineText.trim();

      if (trimmedLine.startsWith('#')) {
        continue;
      } // Yay we have a line
      // Remember, we need to set the cursor to a character other than white space
      // Highlighting doesn't kick in for comments or white space


      return Promise.resolve(new vscode_1.Position(lineNumber, lineText.indexOf(trimmedLine)));
    } // give up


    return Promise.resolve(new vscode_1.Position(range.start.line, 0));
  }

  static isCodeBlock(code) {
    return code.trim().endsWith(':') && code.indexOf('#') === -1;
  }

}

exports.JupyterProvider = JupyterProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidnNjb2RlXzEiLCJyZXF1aXJlIiwiSnVweXRlclByb3ZpZGVyIiwiY2VsbElkZW50aWZpZXIiLCJnZXRTZWxlY3RlZENvZGUiLCJzZWxlY3RlZENvZGUiLCJjdXJyZW50Q2VsbCIsImlzQ29kZUJsb2NrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhY3RpdmVFZGl0b3IiLCJ3aW5kb3ciLCJhY3RpdmVUZXh0RWRpdG9yIiwiZW5kTGluZU51bWJlciIsImVuZCIsImxpbmUiLCJkb2N1bWVudCIsImxpbmVDb3VudCIsInN0YXJ0SW5kZW50IiwiaW5kZXhPZiIsInRyaW0iLCJuZXh0U3RhcnRMaW5lIiwic2VsZWN0aW9uIiwic3RhcnQiLCJsaW5lTnVtYmVyIiwibGluZUF0IiwibmV4dExpbmUiLCJ0ZXh0IiwibmV4dExpbmVJbmRlbnQiLCJlbmRSYW5nZSIsInJhbmdlIiwiZ2V0VGV4dCIsIlJhbmdlIiwiZ2V0Rmlyc3RMaW5lT2ZFeGVjdXRhYmxlQ29kZSIsImlzRW1wdHlPcldoaXRlc3BhY2UiLCJsaW5lVGV4dCIsInRyaW1tZWRMaW5lIiwic3RhcnRzV2l0aCIsIlBvc2l0aW9uIiwiY29kZSIsImVuZHNXaXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXhCOztBQUNBLE1BQU1DLGVBQU4sQ0FBc0I7QUFDbEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCLE1BQWRDLGNBQWMsR0FBRztBQUNqQixXQUFPLHdEQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7OztBQUNBLGFBQU85QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsSUFBSVQsUUFBUSxDQUFDdUMsUUFBYixDQUFzQmQsVUFBdEIsRUFBa0NXLFFBQVEsQ0FBQ2hCLE9BQVQsQ0FBaUJpQixXQUFqQixDQUFsQyxDQUFoQixDQUFQO0FBQ0gsS0FmeUMsQ0FnQjFDOzs7QUFDQSxXQUFPN0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCLElBQUlULFFBQVEsQ0FBQ3VDLFFBQWIsQ0FBc0JSLEtBQUssQ0FBQ1AsS0FBTixDQUFZUixJQUFsQyxFQUF3QyxDQUF4QyxDQUFoQixDQUFQO0FBQ0g7O0FBQ2lCLFNBQVhULFdBQVcsQ0FBQ2lDLElBQUQsRUFBTztBQUNyQixXQUFPQSxJQUFJLENBQUNuQixJQUFMLEdBQVlvQixRQUFaLENBQXFCLEdBQXJCLEtBQTZCRCxJQUFJLENBQUNwQixPQUFMLENBQWEsR0FBYixNQUFzQixDQUFDLENBQTNEO0FBQ0g7O0FBOUVpQjs7QUFnRnRCdEIsT0FBTyxDQUFDSSxlQUFSLEdBQTBCQSxlQUExQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnNjb2RlXzEgPSByZXF1aXJlKFwidnNjb2RlXCIpO1xuY2xhc3MgSnVweXRlclByb3ZpZGVyIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUmVndWxhciBFeHByZXNzaW9uIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBsaW5lIGlzIGEgQ2VsbCBkZWxpbWl0ZXIgb3Igbm90XG4gICAgICpcbiAgICAgKiBAdHlwZSB7UmVnRXhwfVxuICAgICAqIEBtZW1iZXJPZiBMYW5ndWFnZVByb3ZpZGVyXG4gICAgICovXG4gICAgZ2V0IGNlbGxJZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gL14oIyAlJXwjJSV8IyBcXDxjb2RlY2VsbFxcPnwjIEluXFxbXFxkKj9cXF18IyBJblxcWyBcXF0pKC4qKS9pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RlZCBjb2RlXG4gICAgICogSWYgbm90IGltcGxlbWVudGVkLCB0aGVuIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxpbmUgb3Igc2VsZWN0ZWQgY29kZSBpcyB0YWtlbi5cbiAgICAgKiBDYW4gYmUgaW1wbGVtZW50ZWQgdG8gZW5zdXJlIHZhbGlkIGJsb2NrcyBvZiBjb2RlIGFyZSBzZWxlY3RlZC5cbiAgICAgKiBFLmcgaWYgdXNlciBzZWxlY3RzIG9ubHkgdGhlIElmIHN0YXRlbWVudCwgY29kZSBjYW4gYmUgaW1wZWxlbWVudGVkIHRvIGVuc3VyZSBhbGwgY29kZSB3aXRoaW4gdGhlIGlmIHN0YXRlbWVudCAoYmxvY2spIGlzIHJldHVybmVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdGVkQ29kZSBUaGUgc2VsZWN0ZWQgY29kZSBhcyBpZGVudGlmaWVkIGJ5IHRoaXMgZXh0ZW5zaW9uLlxuICAgICAqIEBwYXJhbSB7UmFuZ2V9IFtjdXJyZW50Q2VsbF0gUmFuZ2Ugb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgY2VsbFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFRoZSBjb2RlIHNlbGVjdGVkLiBJZiBub3RoaW5nIGlzIHRvIGJlIGRvbmUsIHJldHVybiB0aGUgcGFyYW1ldGVyIHZhbHVlLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIExhbmd1YWdlUHJvdmlkZXJcbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZENvZGUoc2VsZWN0ZWRDb2RlLCBjdXJyZW50Q2VsbCkge1xuICAgICAgICBpZiAoIUp1cHl0ZXJQcm92aWRlci5pc0NvZGVCbG9jayhzZWxlY3RlZENvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGVjdGVkQ29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb2sgd2UncmUgaW4gYSBibG9jaywgbG9vayBmb3IgdGhlIGVuZCBvZiB0aGUgYmxvY2sgdW50aWxsIHRoZSBsYXN0IGxpbmUgaW4gdGhlIGNlbGwgKGlmIHRoZXJlIGFyZSBhbnkgY2VsbHMpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFZGl0b3IgPSB2c2NvZGVfMS53aW5kb3cuYWN0aXZlVGV4dEVkaXRvcjtcbiAgICAgICAgICAgIGNvbnN0IGVuZExpbmVOdW1iZXIgPSBjdXJyZW50Q2VsbCA/IGN1cnJlbnRDZWxsLmVuZC5saW5lIDogYWN0aXZlRWRpdG9yLmRvY3VtZW50LmxpbmVDb3VudCAtIDE7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGVudCA9IHNlbGVjdGVkQ29kZS5pbmRleE9mKHNlbGVjdGVkQ29kZS50cmltKCkpO1xuICAgICAgICAgICAgY29uc3QgbmV4dFN0YXJ0TGluZSA9IGFjdGl2ZUVkaXRvci5zZWxlY3Rpb24uc3RhcnQubGluZSArIDE7XG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lTnVtYmVyID0gbmV4dFN0YXJ0TGluZTsgbGluZU51bWJlciA8PSBlbmRMaW5lTnVtYmVyOyBsaW5lTnVtYmVyKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gYWN0aXZlRWRpdG9yLmRvY3VtZW50LmxpbmVBdChsaW5lTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0TGluZSA9IGxpbmUudGV4dDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0TGluZUluZGVudCA9IG5leHRMaW5lLmluZGV4T2YobmV4dExpbmUudHJpbSgpKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dExpbmUudHJpbSgpLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRMaW5lSW5kZW50ID09PSBzdGFydEluZGVudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gY29kZSB1bnRpbGwgcHJldmlvdXMgbGluZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRSYW5nZSA9IGFjdGl2ZUVkaXRvci5kb2N1bWVudC5saW5lQXQobGluZU51bWJlciAtIDEpLnJhbmdlLmVuZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhY3RpdmVFZGl0b3IuZG9jdW1lbnQuZ2V0VGV4dChuZXcgdnNjb2RlXzEuUmFuZ2UoYWN0aXZlRWRpdG9yLnNlbGVjdGlvbi5zdGFydCwgZW5kUmFuZ2UpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShhY3RpdmVFZGl0b3IuZG9jdW1lbnQuZ2V0VGV4dChjdXJyZW50Q2VsbCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZmlyc3QgbGluZSAocG9zaXRpb24pIG9mIGV4ZWN1dGFibGUgY29kZSB3aXRoaW4gYSByYW5nZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtUZXh0RG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0TGluZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRMaW5lXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UG9zaXRpb24+fVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIExhbmd1YWdlUHJvdmlkZXJcbiAgICAgKi9cbiAgICBnZXRGaXJzdExpbmVPZkV4ZWN1dGFibGVDb2RlKGRvY3VtZW50LCByYW5nZSkge1xuICAgICAgICBmb3IgKGxldCBsaW5lTnVtYmVyID0gcmFuZ2Uuc3RhcnQubGluZTsgbGluZU51bWJlciA8IHJhbmdlLmVuZC5saW5lOyBsaW5lTnVtYmVyKyspIHtcbiAgICAgICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQubGluZUF0KGxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGxpbmUuaXNFbXB0eU9yV2hpdGVzcGFjZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGluZVRleHQgPSBsaW5lLnRleHQ7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkTGluZSA9IGxpbmVUZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0cmltbWVkTGluZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFlheSB3ZSBoYXZlIGEgbGluZVxuICAgICAgICAgICAgLy8gUmVtZW1iZXIsIHdlIG5lZWQgdG8gc2V0IHRoZSBjdXJzb3IgdG8gYSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiB3aGl0ZSBzcGFjZVxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0aW5nIGRvZXNuJ3Qga2ljayBpbiBmb3IgY29tbWVudHMgb3Igd2hpdGUgc3BhY2VcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IHZzY29kZV8xLlBvc2l0aW9uKGxpbmVOdW1iZXIsIGxpbmVUZXh0LmluZGV4T2YodHJpbW1lZExpbmUpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2l2ZSB1cFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyB2c2NvZGVfMS5Qb3NpdGlvbihyYW5nZS5zdGFydC5saW5lLCAwKSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0NvZGVCbG9jayhjb2RlKSB7XG4gICAgICAgIHJldHVybiBjb2RlLnRyaW0oKS5lbmRzV2l0aCgnOicpICYmIGNvZGUuaW5kZXhPZignIycpID09PSAtMTtcbiAgICB9XG59XG5leHBvcnRzLkp1cHl0ZXJQcm92aWRlciA9IEp1cHl0ZXJQcm92aWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3ZpZGVyLmpzLm1hcCJdfQ==