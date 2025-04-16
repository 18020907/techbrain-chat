import SettingsLayout from "@/components/settings/settings-layout"

export default function TeamPage() {
  return (
    <SettingsLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Team Members</h1>
        <p className="text-gray-500">Manage your team members and their permissions.</p>
      </div>
    </SettingsLayout>
  )
}
