import type React from "react"
import { Button } from "@/components/ui/button"

export default function GeneralSettings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Card URL Shortener */}
        <SettingsSection title="Card URL Shortener" isPro={true}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <Button variant="outline" className="w-full justify-between">
                my.manychat.com
              </Button>
            </div>
            <div className="w-full sm:w-2/3 text-sm text-gray-500">
              If you disable link shortening, we won't be able to provide the Click-Through Rate (CTR) data
            </div>
          </div>
        </SettingsSection>

        {/* Account Time Zone */}
        <SettingsSection title="Account Time Zone">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <Button variant="outline" className="w-full justify-between">
                (UTC+07:00) - Asia/Saigon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9174 9L12.0496 12.9344L8.08264 9L6 9L12.0496 15L18 9L15.9174 9Z" fill="currentColor" />
                </svg>
              </Button>
            </div>
            <div className="w-full sm:w-2/3 text-sm text-gray-500">
              All the data in Manychat will be displayed and exported according to this timezone.
              <a href="#" className="text-blue-500 ml-1">
                Learn more
              </a>
            </div>
          </div>
        </SettingsSection>

        {/* Clone to Another Account */}
        <SettingsSection title="Clone to Another Account">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <Button>Clone This Account</Button>
            </div>
            <div className="w-full sm:w-2/3 text-sm text-gray-500">Copy all content to another account</div>
          </div>
        </SettingsSection>

        {/* Use as Template */}
        <SettingsSection title="Use as Template">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <Button>Create Account Template</Button>
            </div>
            <div className="w-full sm:w-2/3 text-sm text-gray-500">
              Create a snapshot of this account and share it via link
            </div>
          </div>
        </SettingsSection>

        {/* Leave Account */}
        <SettingsSection title="Leave Account">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <Button variant="destructive" disabled>
                Leave
              </Button>
            </div>
            <div className="w-full sm:w-2/3 text-sm text-gray-500">
              <span>
                <a href="#" className="text-blue-500">
                  Transfer
                </a>{" "}
                your ownership to another team member if you want to leave this account
              </span>
            </div>
          </div>
        </SettingsSection>

        {/* Delete Account */}
        <SettingsSection title="Delete Account">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <Button variant="destructive">Delete</Button>
            </div>
            <div className="w-full sm:w-2/3 text-sm text-gray-500">Continue to account deletion</div>
          </div>
        </SettingsSection>
      </div>
    </div>
  )
}

interface SettingsSectionProps {
  title: string
  children: React.ReactNode
  isPro?: boolean
}

function SettingsSection({ title, children, isPro }: SettingsSectionProps) {
  return (
    <div className="border-b pb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/4">
          <h3 className="text-lg font-medium flex items-center">
            {title}
            {isPro && (
              <span className="ml-2 text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">PRO</span>
            )}
          </h3>
        </div>
        <div className="w-full sm:w-3/4">{children}</div>
      </div>
    </div>
  )
}
