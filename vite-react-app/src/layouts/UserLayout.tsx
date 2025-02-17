import { Layout, Typography } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import type { IRouteConfig } from '@/routes/config';

const { Content, Footer } = Layout;
const { Text } = Typography;

const UserLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <>
      <div>上半部分</div>
      {renderRoutes(route.routes)}
      <div>下半部分</div>
    </>

  );
};
export default UserLayout;
