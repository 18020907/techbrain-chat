import SettingsLayout from "@/components/settings/settings-layout"

export default function LogsPage() {
  return (
    <SettingsLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Logs</h1>
        <p className="text-gray-500">View system logs and activity history.</p>
      </div>
    </SettingsLayout>
  )
}
