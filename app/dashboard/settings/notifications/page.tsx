import SettingsLayout from "@/components/settings/settings-layout"

export default function NotificationsPage() {
  return (
    <SettingsLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
        <p className="text-gray-500">Configure how and when you receive notifications.</p>
      </div>
    </SettingsLayout>
  )
}
