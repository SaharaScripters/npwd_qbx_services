import App from './src/App';
import { AppIcon, NotificationIcon } from './icon';

export const path = '/npwd_qbx_services';
export default () => ({
  id: 'npwd_qbx_services',
  nameLocale: 'Service',
  color: '#fff',
  backgroundColor: '#FFD400',
  path,
  icon: AppIcon,
  app: App,
  notificationIcon: NotificationIcon
});
