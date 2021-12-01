"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

class GlobalPythonPathUpdaterService {
  constructor(workspaceService) {
    this.workspaceService = workspaceService;
  }

  updatePythonPath(pythonPath) {
    return __awaiter(this, void 0, void 0, function* () {
      const pythonConfig = this.workspaceService.getConfiguration('python');
      const pythonPathValue = pythonConfig.inspect('pythonPath');

      if (pythonPathValue && pythonPathValue.globalValue === pythonPath) {
        return;
      }

      yield pythonConfig.update('pythonPath', pythonPath, true);
    });
  }

}

exports.GlobalPythonPathUpdaterService = GlobalPythonPathUpdaterService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbFVwZGF0ZXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJHbG9iYWxQeXRob25QYXRoVXBkYXRlclNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsIndvcmtzcGFjZVNlcnZpY2UiLCJ1cGRhdGVQeXRob25QYXRoIiwicHl0aG9uUGF0aCIsInB5dGhvbkNvbmZpZyIsImdldENvbmZpZ3VyYXRpb24iLCJweXRob25QYXRoVmFsdWUiLCJpbnNwZWN0IiwiZ2xvYmFsVmFsdWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFNBQVMsR0FBSSxVQUFRLFNBQUtBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixTQUFPLEtBQUtELENBQUMsS0FBS0EsQ0FBQyxHQUFHRSxPQUFULENBQU4sRUFBeUIsVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkQsYUFBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUVDLFFBQUFBLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxJQUFWLENBQWVGLEtBQWYsQ0FBRCxDQUFKO0FBQThCLE9BQXBDLENBQXFDLE9BQU9HLENBQVAsRUFBVTtBQUFFTCxRQUFBQSxNQUFNLENBQUNLLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JKLEtBQWxCLEVBQXlCO0FBQUUsVUFBSTtBQUFFQyxRQUFBQSxJQUFJLENBQUNOLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUJLLEtBQW5CLENBQUQsQ0FBSjtBQUFrQyxPQUF4QyxDQUF5QyxPQUFPRyxDQUFQLEVBQVU7QUFBRUwsUUFBQUEsTUFBTSxDQUFDSyxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTRixJQUFULENBQWNJLE1BQWQsRUFBc0I7QUFBRUEsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLEdBQWNULE9BQU8sQ0FBQ1EsTUFBTSxDQUFDTCxLQUFSLENBQXJCLEdBQXNDLElBQUlOLENBQUosQ0FBTSxVQUFVRyxPQUFWLEVBQW1CO0FBQUVBLFFBQUFBLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDTCxLQUFSLENBQVA7QUFBd0IsT0FBbkQsRUFBcURPLElBQXJELENBQTBEUixTQUExRCxFQUFxRUssUUFBckUsQ0FBdEM7QUFBdUg7O0FBQy9JSCxJQUFBQSxJQUFJLENBQUMsQ0FBQ04sU0FBUyxHQUFHQSxTQUFTLENBQUNhLEtBQVYsQ0FBZ0JoQixPQUFoQixFQUF5QkMsVUFBVSxJQUFJLEVBQXZDLENBQWIsRUFBeURTLElBQXpELEVBQUQsQ0FBSjtBQUNILEdBTE0sQ0FBUDtBQU1ILENBUEQ7O0FBUUFPLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRVgsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTVksOEJBQU4sQ0FBcUM7QUFDakNDLEVBQUFBLFdBQVcsQ0FBQ0MsZ0JBQUQsRUFBbUI7QUFDMUIsU0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNIOztBQUNEQyxFQUFBQSxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhO0FBQ3pCLFdBQU96QixTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsYUFBYTtBQUNoRCxZQUFNMEIsWUFBWSxHQUFHLEtBQUtILGdCQUFMLENBQXNCSSxnQkFBdEIsQ0FBdUMsUUFBdkMsQ0FBckI7QUFDQSxZQUFNQyxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixZQUFyQixDQUF4Qjs7QUFDQSxVQUFJRCxlQUFlLElBQUlBLGVBQWUsQ0FBQ0UsV0FBaEIsS0FBZ0NMLFVBQXZELEVBQW1FO0FBQy9EO0FBQ0g7O0FBQ0QsWUFBTUMsWUFBWSxDQUFDSyxNQUFiLENBQW9CLFlBQXBCLEVBQWtDTixVQUFsQyxFQUE4QyxJQUE5QyxDQUFOO0FBQ0gsS0FQZSxDQUFoQjtBQVFIOztBQWJnQzs7QUFlckNMLE9BQU8sQ0FBQ0MsOEJBQVIsR0FBeUNBLDhCQUF6QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBHbG9iYWxQeXRob25QYXRoVXBkYXRlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHdvcmtzcGFjZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VTZXJ2aWNlID0gd29ya3NwYWNlU2VydmljZTtcbiAgICB9XG4gICAgdXBkYXRlUHl0aG9uUGF0aChweXRob25QYXRoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBweXRob25Db25maWcgPSB0aGlzLndvcmtzcGFjZVNlcnZpY2UuZ2V0Q29uZmlndXJhdGlvbigncHl0aG9uJyk7XG4gICAgICAgICAgICBjb25zdCBweXRob25QYXRoVmFsdWUgPSBweXRob25Db25maWcuaW5zcGVjdCgncHl0aG9uUGF0aCcpO1xuICAgICAgICAgICAgaWYgKHB5dGhvblBhdGhWYWx1ZSAmJiBweXRob25QYXRoVmFsdWUuZ2xvYmFsVmFsdWUgPT09IHB5dGhvblBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCBweXRob25Db25maWcudXBkYXRlKCdweXRob25QYXRoJywgcHl0aG9uUGF0aCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuR2xvYmFsUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlID0gR2xvYmFsUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFsVXBkYXRlclNlcnZpY2UuanMubWFwIl19