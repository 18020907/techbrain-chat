import SettingsLayout from "@/components/settings/settings-layout"

export default function DisplayPage() {
  return (
    <SettingsLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Display Preferences</h1>
        <p className="text-gray-500">Customize how the dashboard appears to you.</p>
      </div>
    </SettingsLayout>
  )
}
