import React, { Suspense } from "react";
import { BrowserRouter,Switch,Redirect,Route } from "react-router-dom";
import renderRoutes from './routes/renderRoutes'
import Loading from "./pages/common/loading";
import routes from "./routes";
import { useSelector } from "react-redux";
import Header from "./layout/header";
import Sider from "./layout/sider";
import Breadcrumb from "./layout/breadcrumb";
import { Layout } from "antd";
import Login from './pages/common/login'
const { Content } = Layout;


const AppLayout:React.FC=function AppLayout(){
  const role=useSelector(state=>(state as any).get('root').get('userInfo').get('role'));
  return(
    <Layout className="app">
          {/* 头部 */}
          <Header />
          <Layout>
            {/* 侧边栏 */}
            <Sider />
            <Layout style={{ padding: "0 24px 24px" }}>
              {/* 面包屑，展示层级 */}
              <Breadcrumb />

              {/* 内容 */}
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                {/* 懒加载 */}
                <Suspense fallback={<Loading />}>
                  {renderRoutes(routes,role)}
                </Suspense>
              </Content>
            </Layout>
          </Layout>
        </Layout>
  )
}


// const Login:React.FC<{}>=function Login(){
//   return(
//     <div>登录</div>
//   )
// }


const App: React.FC<{}> = () => {

  const isLogin=useSelector(state=>{
    return (state as any).get('root').get('isLogin');
  })
  
  return (
    <div className="app">
      <BrowserRouter>
        {/* 登录鉴权 */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route render={()=>{
            if(!isLogin){
              return <Redirect to='login' />;
            }else{
              return <AppLayout />;
            }
          }} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
