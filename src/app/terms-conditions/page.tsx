"use client";
import Link from "next/link";

export default function TermsConditions() {
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
              Terms and Conditions
            </h1>
            <p className="text-gray-600">Last updated: October 2025</p>
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-[16px] leading-relaxed">
                By downloading, installing, or using the Pomofy mobile
                application (&quot;App&quot;), you agree to be bound by these
                Terms and Conditions (&quot;Terms&quot;). If you do not agree to
                these Terms, do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                2. Description of Service
              </h2>
              <p className="text-[16px] leading-relaxed">
                Pomofy is a Pomodoro timer application that helps users manage
                their time using the Pomodoro Technique. The App provides:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Customizable timer settings</li>
                <li>Session tracking and statistics</li>
                <li>Background customization</li>
                <li>Text customization options</li>
                <li>Focus Lock feature for app blocking</li>
                <li>Data export capabilities (Pro users)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">3. User Accounts</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    3.1 Account Creation
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>You may use the App without creating an account</li>
                    <li>
                      Account creation is optional and provides additional
                      features
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your account information
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    3.2 Account Termination
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      You may delete your account at any time by requesting
                      account deletion through the App settings
                    </li>
                    <li>
                      We reserve the right to terminate accounts that violate
                      these Terms
                    </li>
                    <li>
                      Account deletion will remove all associated data
                      permanently
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                4. Subscription Services
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    4.1 Basic Subscription
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Title</strong>: Basic
                    </li>
                    <li>
                      <strong>Price</strong>: Free
                    </li>
                    <li>
                      <strong>Length of subscription</strong>: Forever
                    </li>
                    <li>
                      <strong>Features</strong>:
                    </li>
                    <ul className="list-disc list-inside space-y-1 ml-8 mt-1">
                      <li>Basic timer functionality</li>
                      <li>Limited font selection</li>
                      <li>Limited background selection</li>
                      <li>Ad-supported</li>
                    </ul>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    4.2 Pro Subscription
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Title</strong>: Pro (lifetime)
                    </li>
                    <li>
                      <strong>Price</strong>: $9.99
                    </li>
                    <li>
                      <strong>Length of subscription</strong>: Lifetime
                      (one-time payment)
                    </li>
                    <li>
                      <strong>Features</strong>:
                    </li>
                    <ul className="list-disc list-inside space-y-1 ml-8 mt-1">
                      <li>All timer features</li>
                      <li>1,500+ fonts selection</li>
                      <li>All background gradient options</li>
                      <li>Custom background images</li>
                      <li>Ad-free experience</li>
                      <li>New features included</li>
                      <li>Priority support</li>
                    </ul>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    4.3 Billing and Payment
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Pro subscription is a one-time payment with lifetime
                      access
                    </li>
                    <li>Payment is processed through your app store account</li>
                    <li>No recurring billing or automatic renewals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    4.4 Subscription Cancellation
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Pro lifetime subscriptions cannot be cancelled once
                      purchased
                    </li>
                    <li>Refunds are subject to app store policies</li>
                    <li>
                      Pro features remain available for the lifetime of the app
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">5. Acceptable Use</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    5.1 Permitted Use
                  </h3>
                  <p className="text-[16px] leading-relaxed">
                    You may use the App for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Personal productivity and time management</li>
                    <li>Educational purposes</li>
                    <li>Professional work organization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    5.2 Prohibited Use
                  </h3>
                  <p className="text-[16px] leading-relaxed">You may not:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Use the App for any illegal or unauthorized purpose</li>
                    <li>Attempt to reverse engineer or modify the App</li>
                    <li>Use the App to harm others or their property</li>
                    <li>Share your account credentials with others</li>
                    <li>Use automated systems to access the App</li>
                    <li>Circumvent or disable Focus Lock features</li>
                    <li>Use Focus Lock to block essential system functions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                6. Focus Lock Feature
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    6.1 Feature Description
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Focus Lock is a feature that blocks access to selected
                      apps during work sessions
                    </li>
                    <li>
                      The feature helps users maintain concentration by
                      preventing distractions
                    </li>
                    <li>
                      Focus Lock is available on both iOS and Android platforms
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    6.2 Required Permissions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>iOS</strong>: Screen Time permission and Family
                      Activity Selection access
                    </li>
                    <li>
                      <strong>Android</strong>: System Alert Window (Draw
                      overlay over other apps) and Usage Access permissions
                    </li>
                    <li>
                      These permissions are required for the app blocking
                      functionality to work
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    6.3 User Responsibilities
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      You are responsible for managing which apps are blocked
                    </li>
                    <li>
                      Do not block essential system apps or emergency services
                    </li>
                    <li>
                      Ensure you have access to important apps for safety and
                      emergency purposes
                    </li>
                    <li>
                      Focus Lock cannot be disabled while a timer session is
                      active
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    6.4 Limitations
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Focus Lock may not work on all devices or operating system
                      versions
                    </li>
                    <li>
                      Some system-level apps cannot be blocked for security
                      reasons
                    </li>
                    <li>
                      We are not responsible for any consequences of using Focus
                      Lock
                    </li>
                    <li>
                      Users should test the feature before relying on it for
                      important work sessions
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                7. Privacy and Data
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    7.1 Data Collection
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      We collect minimal data necessary for App functionality
                    </li>
                    <li>User preferences and settings are stored locally</li>
                    <li>
                      Session statistics may be stored to improve user
                      experience
                    </li>
                    <li>
                      Focus Lock settings and blocked app selections are stored
                      locally
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    7.2 Data Usage
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Your data is used solely to provide App services</li>
                    <li>
                      We do not sell or share your personal data with third
                      parties
                    </li>
                    <li>
                      Data is processed in accordance with our Privacy Policy
                    </li>
                    <li>
                      Focus Lock data is used only for app blocking
                      functionality
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    7.3 Data Export
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pro users may export their session data</li>
                    <li>Exported data is provided in standard formats</li>
                    <li>You retain ownership of your exported data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                8. Intellectual Property
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    8.1 App Ownership
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Pomofy and its content are owned by the App developers
                    </li>
                    <li>
                      All trademarks, copyrights, and intellectual property
                      rights are reserved
                    </li>
                    <li>The App is licensed, not sold, to you</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    8.2 User Content
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      You retain ownership of any content you create using the
                      App
                    </li>
                    <li>
                      You grant us a limited license to process your data for
                      App functionality
                    </li>
                    <li>You are responsible for the content you create</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                9. Disclaimers and Limitations
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    9.1 Service Availability
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      The App is provided &quot;as is&quot; without warranties
                    </li>
                    <li>
                      We do not guarantee uninterrupted or error-free service
                    </li>
                    <li>
                      App availability may be affected by technical issues or
                      maintenance
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    9.2 Limitation of Liability
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      We are not liable for any indirect, incidental, or
                      consequential damages
                    </li>
                    <li>
                      Our total liability is limited to the amount you paid for
                      the App
                    </li>
                    <li>We are not responsible for data loss or corruption</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    9.3 Medical Disclaimer
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pomofy is not a medical or therapeutic tool</li>
                    <li>The App does not provide medical advice</li>
                    <li>
                      Consult healthcare professionals for medical concerns
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                10. Updates and Changes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    10.1 App Updates
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      We may update the App to improve functionality or security
                    </li>
                    <li>Updates may be automatic or require user approval</li>
                    <li>Some updates may require acceptance of new terms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    10.2 Terms Updates
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>We may update these Terms from time to time</li>
                    <li>Significant changes will be communicated to users</li>
                    <li>
                      Continued use of the App constitutes acceptance of updated
                      Terms
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">11. Termination</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    11.1 User Termination
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>You may stop using the App at any time</li>
                    <li>
                      Account deletion will terminate your access to
                      user-specific features
                    </li>
                    <li>
                      Local data may remain on your device until manually
                      removed
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    11.2 Service Termination
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      We may terminate or suspend service for Terms violations
                    </li>
                    <li>We may discontinue the App with reasonable notice</li>
                    <li>
                      Upon termination, your right to use the App ceases
                      immediately
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">12. Governing Law</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    12.1 Jurisdiction
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      These Terms are governed by the laws of the jurisdiction
                      where the App is developed
                    </li>
                    <li>
                      Any disputes will be resolved in the appropriate courts
                    </li>
                    <li>International users agree to comply with local laws</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    12.2 Severability
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      If any provision of these Terms is found to be
                      unenforceable, the remaining provisions remain in effect
                    </li>
                    <li>
                      Invalid provisions will be modified to the minimum extent
                      necessary
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                13. Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">13.1 Support</h3>
                  <p className="text-[16px] leading-relaxed">
                    For questions about these Terms or the App:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Email</strong>: nosiahstudio@gmail.com
                    </li>
                    <li>
                      <strong>In-App Support</strong>: Available through the App
                      settings
                    </li>
                    <li>
                      <strong>Response Time</strong>: We aim to respond within
                      48 hours
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    13.2 Legal Notices
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Legal notices may be sent to the email address associated
                      with your account
                    </li>
                    <li>Notices are effective upon sending</li>
                    <li>
                      You are responsible for keeping your contact information
                      current
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                14. Third-Party Services
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    14.1 App Store Terms
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      App store purchases are subject to the respective
                      store&apos;s terms
                    </li>
                    <li>Refund policies are determined by the app store</li>
                    <li>We are not responsible for app store billing issues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    14.2 Third-Party Integrations
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>The App may integrate with third-party services</li>
                    <li>
                      Third-party services have their own terms and privacy
                      policies
                    </li>
                    <li>
                      We are not responsible for third-party service
                      availability or content
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">15. Force Majeure</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    15.1 Unforeseen Circumstances
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      We are not liable for delays or failures due to
                      circumstances beyond our control
                    </li>
                    <li>
                      This includes natural disasters, government actions, or
                      technical failures
                    </li>
                    <li>
                      We will make reasonable efforts to restore service when
                      possible
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                16. Entire Agreement
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    16.1 Complete Terms
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      These Terms constitute the entire agreement between you
                      and us
                    </li>
                    <li>
                      Previous agreements or understandings are superseded
                    </li>
                    <li>No oral modifications are binding unless in writing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">
                17. Acknowledgment
              </h2>
              <p className="text-[16px] leading-relaxed">
                By using Pomofy, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You have read and understood these Terms</li>
                <li>You agree to be bound by these Terms</li>
                <li>You are of legal age to enter into this agreement</li>
                <li>
                  You have the authority to accept these Terms on behalf of any
                  organization you represent
                </li>
              </ul>
            </section>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-[16px] font-[600] text-center mb-2">
                Pomofy - Your Personal Productivity Companion
              </p>
              <p className="text-[14px] text-gray-600 italic text-center">
                These Terms and Conditions are designed to protect both users
                and the App developers while ensuring a fair and transparent
                relationship. We encourage you to read them carefully and
                contact us with any questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
