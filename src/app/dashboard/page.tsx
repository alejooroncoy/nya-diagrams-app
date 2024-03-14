import { Metadata } from 'next';
import FlowCharts from './components/FlowCharts';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const Dashboard = async () => {
  return <FlowCharts />;
};

export default Dashboard;
