"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow to-pink">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/20 backdrop-blur-sm rounded-[30px] p-8 shadow-lg">
          <div className="mb-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2 mb-4"
            >
              ← Back to Home
            </Link>
            <h1 className="text-[40px] font-[700] mb-4">
              Privacy Policy for Pomofy
            </h1>
            <p className="text-gray-600">Last updated: July 2025</p>
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-[24px] font-[600] mb-3">Introduction</h2>
              <p className="text-[16px] leading-relaxed">
                Welcome to Pomofy, a Pomodoro timer application designed to help
                you manage your time effectively. This Privacy Policy explains
                how we collect, use, and protect your information when you use
                our mobile application.
              </p>
              <p className="text-[16px] leading-relaxed mt-3">
                By using Pomofy, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Information We Collect
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Account Information</strong>: When you sign in
                      with Google/Apple, we collect your email address, name,
                      and profile picture (if provided by Google/Apple).
                    </li>
                    <li>
                      <strong>User ID</strong>: A unique identifier assigned to
                      your account for authentication and data synchronization.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    App Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Timer Settings</strong>: Your custom timer
                      durations, break timer settings, and app preferences.
                    </li>
                    <li>
                      <strong>Appearance Settings</strong>: Your chosen font
                      family, text size, text color, and background preferences.
                    </li>
                    <li>
                      <strong>Sound Settings</strong>: Whether you have enabled
                      sound notifications.
                    </li>
                    <li>
                      <strong>Usage Analytics</strong>: How you interact with
                      the app, including feature usage and app performance data.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Device Information
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Device Type</strong>: Information about your
                      device (iOS, Android, etc.).
                    </li>
                    <li>
                      <strong>App Version</strong>: The version of Pomofy you
                      are using.
                    </li>
                    <li>
                      <strong>Crash Reports</strong>: Technical information
                      about app crashes and errors to help improve app
                      stability.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                How We Use Your Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    To Provide Our Services
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Authentication</strong>: To verify your identity
                      and manage your account.
                    </li>
                    <li>
                      <strong>Data Synchronization</strong>: To sync your
                      settings across devices when you sign in.
                    </li>
                    <li>
                      <strong>App Functionality</strong>: To remember your
                      preferences and provide personalized timer experiences.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    To Improve Our Services
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Analytics</strong>: To understand how users
                      interact with our app and identify areas for improvement.
                    </li>
                    <li>
                      <strong>Crash Reporting</strong>: To identify and fix
                      technical issues that may affect app performance.
                    </li>
                    <li>
                      <strong>Performance Monitoring</strong>: To ensure the app
                      runs smoothly and efficiently.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    For Business Purposes
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Advertisements</strong>: To display relevant
                      advertisements to free users (if applicable).
                    </li>
                    <li>
                      <strong>Subscription Management</strong>: To process and
                      manage premium subscriptions.
                    </li>
                    <li>
                      <strong>Customer Support</strong>: To respond to your
                      inquiries and provide assistance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Third-Party Services
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Google Services
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Google Sign-In</strong>: We use Google Sign-In for
                      user authentication. Google may collect and process your
                      information according to their privacy policy.
                    </li>
                    <li>
                      <strong>Google Mobile Ads</strong>: We may display
                      advertisements through Google Mobile Ads. Google&apos;s
                      advertising services are subject to their privacy policy.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Apple Services
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Apple Sign-In</strong>: We use Apple Sign-In for
                      user authentication. Apple may collect and process your
                      information according to their privacy policy.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Firebase Services
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Firebase Analytics</strong>: We use Firebase
                      Analytics to understand app usage patterns and improve
                      user experience.
                    </li>
                    <li>
                      <strong>Firebase Crashlytics</strong>: We use Firebase
                      Crashlytics to collect crash reports and technical error
                      information to improve app stability.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Supabase</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Data Storage</strong>: We use Supabase to store
                      your app settings and preferences securely in the cloud.
                    </li>
                    <li>
                      <strong>Authentication</strong>: Supabase handles user
                      authentication and session management.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">RevenueCat</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Subscription Management</strong>: We use
                      RevenueCat to manage premium subscriptions and payment
                      processing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Data Storage and Security
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Local Storage</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Device Storage</strong>: Some app settings are
                      stored locally on your device using SharedPreferences.
                    </li>
                    <li>
                      <strong>Offline Functionality</strong>: The app can
                      function offline with locally stored settings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Cloud Storage</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Supabase Database</strong>: Your settings and
                      preferences are stored securely in Supabase&apos;s cloud
                      database.
                    </li>
                    <li>
                      <strong>Data Encryption</strong>: All data transmitted to
                      and from our servers is encrypted using industry-standard
                      protocols.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Security Measures
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Authentication</strong>: We use secure
                      authentication methods to protect your account.
                    </li>
                    <li>
                      <strong>Data Access</strong>: Only authorized personnel
                      have access to your personal information.
                    </li>
                    <li>
                      <strong>Regular Updates</strong>: We regularly update our
                      security measures to protect your data.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">Data Retention</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Account Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Active Accounts</strong>: We retain your data as
                      long as your account is active.
                    </li>
                    <li>
                      <strong>Deleted Accounts</strong>: If you delete your
                      account, we will remove your personal data within 30 days.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Analytics Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Usage Analytics</strong>: Analytics data is
                      retained for up to 2 years to help improve our services.
                    </li>
                    <li>
                      <strong>Crash Reports</strong>: Crash reports are retained
                      for up to 1 year for technical improvement purposes.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Your Rights and Choices
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Access and Control
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>View Your Data</strong>: You can view your account
                      information and settings within the app.
                    </li>
                    <li>
                      <strong>Update Information</strong>: You can update your
                      profile information through the app settings.
                    </li>
                    <li>
                      <strong>Delete Account</strong>: You can delete your
                      account and associated data through the app settings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Privacy Settings
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Analytics Opt-out</strong>: You can opt out of
                      analytics collection through your device settings.
                    </li>
                    <li>
                      <strong>Ad Personalization</strong>: You can control ad
                      personalization through your device settings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Data Portability
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Export Data</strong>: You can request a copy of
                      your data by contacting us.
                    </li>
                    <li>
                      <strong>Data Transfer</strong>: You can transfer your
                      settings to a new device by signing in with the same
                      account.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Children&apos;s Privacy
              </h2>
              <p className="text-[16px] leading-relaxed">
                Pomofy is not intended for children under 13 years of age. We do
                not knowingly collect personal information from children under
                13. If you are a parent or guardian and believe your child has
                provided us with personal information, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                International Data Transfers
              </h2>
              <p className="text-[16px] leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and that your data
                is protected according to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Changes to This Privacy Policy
              </h2>
              <p className="text-[16px] leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Posting the new Privacy Policy in the app</li>
                <li>Sending you a notification through the app</li>
                <li>
                  Updating the &quot;Last Updated&quot; date at the top of this
                  policy
                </li>
              </ul>
              <p className="text-[16px] leading-relaxed mt-3">
                Your continued use of Pomofy after any changes constitutes
                acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">Contact Us</h2>
              <p className="text-[16px] leading-relaxed">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="text-[16px]">
                  <strong>Email</strong>: nosiahstudio@gmail.com
                </p>
                <p className="text-[16px]">
                  <strong>App Support</strong>: Through the email provided above
                </p>
                <p className="text-[16px]">
                  <strong>Address</strong>: Hanoi, Vietnam
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Legal Basis for Processing (EU Users)
              </h2>
              <p className="text-[16px] leading-relaxed">
                If you are located in the European Union, our legal basis for
                processing your personal data includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>
                  <strong>Consent</strong>: When you agree to our use of your
                  data for specific purposes
                </li>
                <li>
                  <strong>Contract Performance</strong>: To provide you with our
                  services
                </li>
                <li>
                  <strong>Legitimate Interest</strong>: To improve our services
                  and ensure app functionality
                </li>
                <li>
                  <strong>Legal Obligation</strong>: To comply with applicable
                  laws and regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                Your Rights (EU Users)
              </h2>
              <p className="text-[16px] leading-relaxed">
                If you are located in the European Union, you have the following
                rights:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>
                  <strong>Right to Access</strong>: Request information about
                  your personal data
                </li>
                <li>
                  <strong>Right to Rectification</strong>: Request correction of
                  inaccurate data
                </li>
                <li>
                  <strong>Right to Erasure</strong>: Request deletion of your
                  personal data
                </li>
                <li>
                  <strong>Right to Portability</strong>: Request a copy of your
                  data in a portable format
                </li>
                <li>
                  <strong>Right to Object</strong>: Object to processing of your
                  personal data
                </li>
                <li>
                  <strong>Right to Restrict Processing</strong>: Request
                  limitation of data processing
                </li>
              </ul>
              <p className="text-[16px] leading-relaxed mt-3">
                To exercise these rights, please contact us using the
                information provided above.
              </p>
            </section>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-[14px] text-gray-600 italic">
                <strong>Note</strong>: This Privacy Policy is specific to the
                Pomofy app and covers all the data collection and usage
                practices implemented in the current version of the application.
                The policy is designed to be transparent about how we handle
                your information and to comply with relevant privacy laws and
                regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
