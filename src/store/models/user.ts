import { Dispatch } from "redux";
import immutable from "immutable";
import API from "../../ajax/api";
import ajax from "../../ajax";

enum GetUserType {
  load = "get_user_multiparams_load",
  success = "get_user_multiparams_success",
  fail = "get_user_multiparams_fail"
}

interface Opt {
  [propname: string]: string;
}

// 同步action
const GetUser = (type: GetUserType, value: Opt | Opt[]) => ({
  type,
  value
});

type Action = ReturnType<typeof GetUser>;

// 异步action
//根据用户类型找全部相关角色
export const requestGetUserRoleType = (value: Opt) => (dispatch: Dispatch) => {
  dispatch(GetUser(GetUserType.load, value));

  ajax
    .get(API.GET_USER_BY_ROLETYPE_API, {
      params: value
    })
    .then(({ data }) => {
      //   console.log(data);
      const newData = data.data.map((item: any) => ({
        ...item,
        key: item._id
      }));
      console.log(newData);
      dispatch(GetUser(GetUserType.success, newData));
    })
    .catch(error => {
      dispatch(GetUser(GetUserType.fail, value));
    });
};
// 根据选择条件搜索用户内容
export const requestGetUserMultiParams = (value: Opt) => (
  dispatch: Dispatch
) => {
  dispatch(GetUser(GetUserType.load, value));
  ajax
    .get(API.GET_USER_BY_MULTIPARAMS_API, {
      params: value
    })
    .then(({ data }) => {

      const newData = data.data.map((item: any) => ({
        ...item,
        key: item._id
      }));
      dispatch(GetUser(GetUserType.success, newData));
    })
    .catch(error => {
      dispatch(GetUser(GetUserType.fail, value));
    });
};

const initialState = {
  landlord: {
    'multidata': {
      status: "waiting",
      data: null
    }
  }
};

//reducer
export default (state = immutable.fromJS(initialState), action: Action) => {

  switch (action.type) {
    
    case GetUserType.load:
      return state.setIn(["landlord", "multidata", "status"], "loading");
    case GetUserType.success:

      const newState = state.setIn(
        ["landlord", "multidata", "status"],
        "success"
      );
      
      return newState.setIn(
        ["landlord", "multidata", "data"],
        immutable.fromJS(action.value)
      );
    case GetUserType.fail:
      return state.setIn(["landlord", "multidata", "status"], "fail");
    default:
      return state;
  }
};
