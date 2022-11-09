import "./linkStyle.scss";
import Link from "../link";
import preferences from '../../../assets/sidebarIcons/settings/preferences.svg'
import feesandpricing from '../../../assets/sidebarIcons/settings/feesandpricing.svg'
import auditlogs from '../../../assets/sidebarIcons/settings/auditlogs.svg'

const Settings = () => {
  return (
    <div className="container settings">
      <h4>Settings</h4>
      <ul>
        <Link title="Preferences" icon={preferences} />
        <Link title="Fees and Pricing" icon={feesandpricing} />
        <Link title="Audit Logs" icon={auditlogs} />
      </ul>
    </div>
  );
};

export default Settings;
