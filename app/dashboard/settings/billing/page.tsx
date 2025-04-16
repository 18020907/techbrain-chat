import SettingsLayout from "@/components/settings/settings-layout"

export default function BillingPage() {
  return (
    <SettingsLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Billing</h1>
        <p className="text-gray-500">Manage your subscription and payment methods.</p>
      </div>
    </SettingsLayout>
  )
}
