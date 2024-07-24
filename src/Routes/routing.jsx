import DesignLoader from "components/DesignLoader";
import CreateTeam from "pages/TeamGeneralSetting/CreateTeam";
import GeneralSettingTransaction from "pages/TeamGeneralSetting/GeneralSettingTransaction";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CommonRoutes from "routeHandler/CommonRoutes";
const PrivateRoutes = React.lazy(() => import("routeHandler/PrivateRoutes"));
const Login = React.lazy(() => import("../pages/Login"));
const ForgotPassword = React.lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = React.lazy(() => import("../pages/ResetPassword"));
const SignUpChooseType = React.lazy(() => import("../pages/SignUp/SignUpChooseType"));
const CompanySignUp = React.lazy(() => import("../pages/SignUp/CompanySignUp"));
const AcademicInstitutionSignUp = React.lazy(() => import("../pages/SignUp/AcademicInstitutionSignUp"));
const SignUpSuccessfullyMessage = React.lazy(() => import("../pages/SignUpSuccessfullyMessage"));
const SignUpSuccessfullyPendingMessage = React.lazy(() => import("../pages/SignUpSuccessfullyPendingMessage"));
// const Profile = React.lazy(() => import("../pages/Profile"));
const LeftSidebar = React.lazy(() => import("../layout/LeftSidebar"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const PostedJob = React.lazy(() => import("../pages/PostedJob"));
const RolesPermission = React.lazy(() => import("../pages/Roles&Permission"));
const CreateRole = React.lazy(() => import("../pages/Roles&Permission/CreateRole"));
const EditAndViewRole = React.lazy(() => import("../pages/Roles&Permission/EditAndViewRole"));
const Employees = React.lazy(() => import("../pages/Employees"));
const CompanyProfile = React.lazy(() => import("../pages/CompanyProfile"));
const AddNewEmployee = React.lazy(() => import("../pages/Employees/AddNewEmployee"));
const EditViewEmployee = React.lazy(() => import("../pages/Employees/EditViewEmployee"));
const OpenJobDetails = React.lazy(() => import("../pages/PostedJob/OpenTab/OpenJobDetails"));
const OpenApplicantProfile = React.lazy(() => import("../pages/PostedJob/OpenTab/OpenApplicantProfile"));
const ActiveJobDetails = React.lazy(() => import("../pages/PostedJob/ActiveTab/ActiveJobDetails"));
const ActiveApplicantProfile = React.lazy(() => import("../pages/PostedJob/ActiveTab/ActiveApplicantProfile"));
const CloseJobDetails = React.lazy(() => import("../pages/PostedJob/ClosedTab/CloseJobDetails"));
const FacultyProfile = React.lazy(() => import("../pages/FacultyProfile"));
const PostJob = React.lazy(() => import("../pages/PostJob"));
const PreviewJob = React.lazy(() => import("../pages/PostJob/PreviewJob"));
const PostJobSuccessMsg = React.lazy(() => import("../pages/PostJob/PostJobSuccessMsg"));
const HelpSupport = React.lazy(() => import("../pages/HelpSupport"));
const ManageAffiliates = React.lazy(() => import("../pages/Affiliates"));
const AddAffiliate = React.lazy(() => import("../pages/Affiliates/AddAffiliate"));
const AffiliateDetails = React.lazy(() => import("../pages/Affiliates/AffiliateDetails"));
const NoAffiliate = React.lazy(() => import("../pages/Affiliates/NoAffiliate"));
const StudentDatabase = React.lazy(() => import("../pages/StudentDatabase"));
const StudentProfile = React.lazy(() => import("../pages/StudentDatabase/StudentProfile"));
const Teams = React.lazy(() => import("../pages/TeamGeneralSetting"));
const SavedPaymentMethod = React.lazy(() => import("../pages/TeamGeneralSetting/GeneralSettingSavedPayments"));
const GeneralSettingOther = React.lazy(() => import("../pages/TeamGeneralSetting/GeneralSettingOther"));

const Routing = () => {
  return (
    <React.Suspense fallback={<div><DesignLoader /></div>}>
      <Router>
        <Routes>
          {/* all common routes */}
          <Route path="/" element={<CommonRoutes />} >
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:code" element={<ResetPassword />} />
          <Route path="/signup-choose-type" element={<SignUpChooseType />} />
          <Route path="/company-sign-up" element={<CompanySignUp />} />
          <Route path="/academic-institution-sign-up" element={<AcademicInstitutionSignUp />} />
          <Route path="/signup-successfully-message" element={<SignUpSuccessfullyMessage />} />
          <Route path="/signup-successfully-pending-message" element={<SignUpSuccessfullyPendingMessage />} />
          </Route>          

          {/* all private routes */}
          <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<LeftSidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posted-job" element={<PostedJob />} />
            <Route path="/open-job-detail" element={<OpenJobDetails />} />
            <Route path="/applicant-profile" element={<OpenApplicantProfile />} />
            <Route path="/active-job-detail" element={<ActiveJobDetails />} />
            <Route path="/active-applicant-profile" element={<ActiveApplicantProfile />} />
            <Route path="/close-job-detail" element={<CloseJobDetails />} />
            <Route path="/roles-and-permission" element={<RolesPermission />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/help" element={<HelpSupport />} />
            <Route path="/manage-affiliates" element={<ManageAffiliates />} />
            <Route path="/no-affiliate" element={<NoAffiliate />} />
            <Route path="/student-database" element={<StudentDatabase />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/general-setting-transaction" element={<GeneralSettingTransaction />} />
            <Route path="/saved-payment-method" element={<SavedPaymentMethod />} />
            <Route path="/general-setting-other" element={<GeneralSettingOther />} />
          </Route>
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/faculty-profile" element={<FacultyProfile />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/preview-job" element={<PreviewJob />} />
          <Route path="/post-job-success" element={<PostJobSuccessMsg />} />
          <Route path="/add-affiliate" element={<AddAffiliate />} />
          <Route path="/affiliate-details" element={<AffiliateDetails />} />

          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/create-role" element={<CreateRole />} />
          <Route path="/edit-and-view-role" element={<EditAndViewRole />} />
          <Route path="/add-new-employee" element={<AddNewEmployee />} />
          <Route path="/editandview-employee" element={<EditViewEmployee />} />
          <Route path="/create-team" element={<CreateTeam />} />
          </Route>

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default Routing;
