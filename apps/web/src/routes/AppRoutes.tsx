import { Routes, Route, Navigate } from "react-router-dom"

import DashboardPage from "../pages/dashboard/DashboardPage"
import BoardPage from "../pages/boards/BoardPage"
import IssuesPage from "../pages/issues/IssuesPage"
import DiscussionsPage from "../pages/discussions/DiscussionsPage"
import AnalyticsPage from "../pages/analytics/AnalyticsPage"
import SettingsPage from "../pages/settings/SettingsPage"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/boards" element={<BoardPage />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="/discussions" element={<DiscussionsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}