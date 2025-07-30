"use client";
import Link from "next/link";

export default function SupportPage() {
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
              Pomofy Support & Documentation
            </h1>
            <p className="text-gray-600">Last updated: July 2025</p>
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-[24px] font-[600] mb-3">Introduction</h2>
              <p className="text-[16px] leading-relaxed">
                Thank you for using Pomofy! This guide will help you get the
                most out of your Pomodoro timer experience. Whether you&apos;re
                a new user or looking to explore advanced features, this
                comprehensive documentation covers everything you need to know
                about using Pomofy effectively.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">Table of Contents</h2>
              <div className="p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#getting-started"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      1. Getting Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="#core-features"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      2. Core Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#customization-options"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      3. Customization Options
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pro-features"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      4. Pro Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#account-management"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      5. Account Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#troubleshooting"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      6. Troubleshooting
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact-support"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      7. Contact Support
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section id="getting-started">
              <h2 className="text-[24px] font-[600] mb-3">
                1. Getting Started
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    What is Pomofy?
                  </h3>
                  <p className="text-[16px] leading-relaxed">
                    Pomofy is a beautiful, customizable Pomodoro timer designed
                    to help you stay focused and productive. The app implements
                    the proven Pomodoro Technique, which involves working in
                    focused sessions followed by short breaks.
                  </p>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">First Launch</h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>
                      <strong>Open Pomofy</strong> on your device
                    </li>
                    <li>
                      <strong>Set your timer duration</strong> by tapping the
                      timer display on the home screen
                    </li>
                    <li>
                      <strong>Set your break duration</strong> by tapping the
                      break timer display
                    </li>
                    <li>
                      <strong>Start your first session</strong> by tapping the
                      play button
                    </li>
                    <li>
                      <strong>Customize your experience</strong> using the
                      settings options
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Default Settings
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Work Timer:</strong> 45 minutes (2,700 seconds)
                    </li>
                    <li>
                      <strong>Break Timer:</strong> 15 minutes (900 seconds)
                    </li>
                    <li>
                      <strong>Font:</strong> Baloo 2
                    </li>
                    <li>
                      <strong>Text Size:</strong> 50px
                    </li>
                    <li>
                      <strong>Text Color:</strong> Dark gray
                    </li>
                    <li>
                      <strong>Background:</strong> Default gradient
                    </li>
                    <li>
                      <strong>Sound:</strong> Enabled
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="core-features">
              <h2 className="text-[24px] font-[600] mb-3">2. Core Features</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Timer Controls
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Start:</strong> Begin your work or break session
                    </li>
                    <li>
                      <strong>Pause:</strong> Temporarily pause the timer
                    </li>
                    <li>
                      <strong>Resume:</strong> Continue from where you left off
                    </li>
                    <li>
                      <strong>Reset:</strong> Return to the original duration
                    </li>
                    <li>
                      <strong>Stop:</strong> End the current session and move to
                      the next phase
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Work Sessions</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Set custom work durations from 1 minute to 23 hours 59
                      minutes
                    </li>
                    <li>Visual countdown with large, clear display</li>
                    <li>Sound notification when session completes</li>
                    <li>Automatic transition to break timer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Break Sessions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Configure break durations to match your needs</li>
                    <li>Different sound notification for break completion</li>
                    <li>Option to skip breaks and continue working</li>
                    <li>Visual indicator showing &quot;Break Time&quot;</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Sound Notifications
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Gentle bell sound for work session completion</li>
                    <li>Different bell sound for break completion</li>
                    <li>Option to disable sounds in settings</li>
                    <li>Volume follows device settings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="customization-options">
              <h2 className="text-[24px] font-[600] mb-3">
                3. Customization Options
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Font Selection
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Free Users:</strong> Access to 20 popular Google
                      Fonts
                    </li>
                    <li>
                      <strong>Pro Users:</strong> Unlimited access to all Google
                      Fonts
                    </li>
                    <li>
                      <strong>How to change:</strong> Tap the font icon on the
                      home screen
                    </li>
                    <li>
                      <strong>Search:</strong> Use the search bar to find
                      specific fonts
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Text Size</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Range:</strong> 12px to 80px
                    </li>
                    <li>
                      <strong>How to change:</strong> Tap the text size icon on
                      the home screen
                    </li>
                    <li>
                      <strong>Preview:</strong> See changes in real-time
                    </li>
                    <li>
                      <strong>Recommended:</strong> 40-60px for most devices
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Text Color</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Color Picker:</strong> Full spectrum color
                      selection
                    </li>
                    <li>
                      <strong>Quick Colors:</strong> 15 preset colors for quick
                      selection
                    </li>
                    <li>
                      <strong>How to change:</strong> Tap the color icon on the
                      home screen
                    </li>
                    <li>
                      <strong>Accessibility:</strong> High contrast options
                      available
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Background Options
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Solid Colors:</strong> Choose any color for your
                      background
                    </li>
                    <li>
                      <strong>Gradients:</strong> Beautiful preset gradient
                      combinations
                    </li>
                    <li>
                      <strong>Custom Images:</strong> Upload your own background
                      images (Pro only)
                    </li>
                    <li>
                      <strong>How to change:</strong> Tap the background icon on
                      the home screen
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="pro-features">
              <h2 className="text-[24px] font-[600] mb-3">4. Pro Features</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    What&apos;s Included in Pro?
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Unlimited Fonts:</strong> Access to all Google
                      Fonts
                    </li>
                    <li>
                      <strong>Premium Gradients:</strong> Exclusive gradient
                      backgrounds
                    </li>
                    <li>
                      <strong>Custom Images:</strong> Upload and use your own
                      background images
                    </li>
                    <li>
                      <strong>Ad-Free Experience:</strong> No advertisements or
                      interruptions
                    </li>
                    <li>
                      <strong>Priority Support:</strong> Faster response times
                      for support requests
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    How to Upgrade to Pro
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Open Pomofy</li>
                    <li>Tap the profile icon</li>
                    <li>Select &quot;Subscription&quot;</li>
                    <li>
                      Choose the Pro plan:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>
                          <strong>Pro (Lifetime):</strong> $9.99 one-time
                          payment
                        </li>
                      </ul>
                    </li>
                    <li>Complete the purchase through your app store</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Pro Purchase Management
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Restore:</strong> Tap &quot;Restore
                      Purchases&quot; in the subscription page
                    </li>
                    <li>
                      <strong>Refunds:</strong> Contact your app store for
                      refund requests
                    </li>
                    <li>
                      <strong>Lifetime Access:</strong> One-time purchase
                      provides permanent access to all Pro features
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="account-management">
              <h2 className="text-[24px] font-[600] mb-3">
                5. Account Management
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Sign In with Google/Apple
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Benefits:</strong> Sync settings across devices
                    </li>
                    <li>
                      <strong>Privacy:</strong> Only basic profile information
                      is shared
                    </li>
                    <li>
                      <strong>Security:</strong> Uses Google/Apple secure
                      authentication
                    </li>
                    <li>
                      <strong>How to sign in:</strong> Tap the profile icon and
                      select &quot;Sign in with Google/Apple&quot;
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Cloud Sync</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>What syncs:</strong> Timer settings, customization
                      preferences
                    </li>
                    <li>
                      <strong>When it syncs:</strong> Automatically when you
                      sign in
                    </li>
                    <li>
                      <strong>Offline use:</strong> App works without internet
                      connection
                    </li>
                    <li>
                      <strong>Data storage:</strong> Secure Supabase cloud
                      storage
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Sign Out</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>How to:</strong> Tap profile icon → Settings →
                      Sign Out
                    </li>
                    <li>
                      <strong>What happens:</strong> Local settings remain,
                      cloud sync stops
                    </li>
                    <li>
                      <strong>Re-sign in:</strong> Your settings will be
                      restored
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="troubleshooting">
              <h2 className="text-[24px] font-[600] mb-3">
                6. Troubleshooting
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Common Issues</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Timer Not Working
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Check sound settings:</strong> Ensure device
                          volume is on
                        </li>
                        <li>
                          <strong>Restart app:</strong> Close and reopen Pomofy
                        </li>
                        <li>
                          <strong>Check permissions:</strong> Ensure app has
                          necessary permissions
                        </li>
                        <li>
                          <strong>Update app:</strong> Install the latest
                          version
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Settings Not Saving
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Check internet:</strong> Ensure stable
                          internet connection
                        </li>
                        <li>
                          <strong>Sign in again:</strong> Re-authenticate
                        </li>
                        <li>
                          <strong>Clear cache:</strong> Restart the app
                        </li>
                        <li>
                          <strong>Contact support:</strong> If issue persists
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Customization Not Working
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Pro subscription:</strong> Some features
                          require Pro
                        </li>
                        <li>
                          <strong>App restart:</strong> Close and reopen the app
                        </li>
                        <li>
                          <strong>Check storage:</strong> Ensure device has
                          sufficient storage
                        </li>
                        <li>
                          <strong>Update app:</strong> Install latest version
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Sync Issues
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Check internet:</strong> Ensure stable
                          connection
                        </li>
                        <li>
                          <strong>Sign in again:</strong> Re-authenticate
                        </li>
                        <li>
                          <strong>Wait:</strong> Sync may take a few minutes
                        </li>
                        <li>
                          <strong>Contact support:</strong> If issue persists
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Performance Issues
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Close other apps:</strong> Free up device memory
                    </li>
                    <li>
                      <strong>Restart device:</strong> Clear system cache
                    </li>
                    <li>
                      <strong>Update device:</strong> Ensure latest OS version
                    </li>
                    <li>
                      <strong>Reinstall app:</strong> As a last resort
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Sound Issues</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Check device volume:</strong> Ensure volume is not
                      muted
                    </li>
                    <li>
                      <strong>Check app settings:</strong> Verify sound is
                      enabled in Pomofy
                    </li>
                    <li>
                      <strong>Check device settings:</strong> Ensure app has
                      audio permissions
                    </li>
                    <li>
                      <strong>Test with other apps:</strong> Verify device audio
                      works
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="contact-support">
              <h2 className="text-[24px] font-[600] mb-3">
                7. Contact Support
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    How to Get Help
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>
                      <strong>In-App Support:</strong> Tap profile icon →
                      Settings → Contact Us
                    </li>
                    <li>
                      <strong>Email Support:</strong>{" "}
                      <a
                        href="mailto:nosiahstudio@gmail.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        nosiahstudio@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong>Response Time:</strong> Within 24-48 hours
                    </li>
                    <li>
                      <strong>Priority Support:</strong> Pro users get faster
                      responses
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    What to Include in Support Requests
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Device information:</strong> Model and OS version
                    </li>
                    <li>
                      <strong>App version:</strong> Found in Settings → About
                    </li>
                    <li>
                      <strong>Issue description:</strong> Detailed explanation
                      of the problem
                    </li>
                    <li>
                      <strong>Steps to reproduce:</strong> How to recreate the
                      issue
                    </li>
                    <li>
                      <strong>Screenshots:</strong> If applicable
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Bug Reports</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Detailed description:</strong> What happened vs.
                      what you expected
                    </li>
                    <li>
                      <strong>Steps to reproduce:</strong> Exact steps to
                      recreate the issue
                    </li>
                    <li>
                      <strong>Device information:</strong> Model, OS version,
                      app version
                    </li>
                    <li>
                      <strong>Screenshots/videos:</strong> Visual evidence of
                      the issue
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Feature Requests
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Clear description:</strong> What feature
                      you&apos;d like to see
                    </li>
                    <li>
                      <strong>Use case:</strong> How you would use this feature
                    </li>
                    <li>
                      <strong>Benefits:</strong> Why this feature would be
                      valuable
                    </li>
                    <li>
                      <strong>Examples:</strong> Similar features in other apps
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">App Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    System Requirements
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>iOS:</strong> iOS 12.0 or later
                    </li>
                    <li>
                      <strong>Android:</strong> Android 6.0 (API level 23) or
                      later
                    </li>
                    <li>
                      <strong>Storage:</strong> 50MB available space
                    </li>
                    <li>
                      <strong>Internet:</strong> Required for sync and Pro
                      features
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">Permissions</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Internet:</strong> For cloud sync and Pro features
                    </li>
                    <li>
                      <strong>Storage:</strong> For saving settings and
                      selecting custom images
                    </li>
                    <li>
                      <strong>Audio:</strong> For timer completion sounds
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">Legal Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Terms of Service
                  </h3>
                  <p className="text-[16px] leading-relaxed">
                    By using Pomofy, you agree to our Terms of Service, which
                    can be found in the app under Settings → Legal → Terms of
                    Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-2">
                    Privacy Policy
                  </h3>
                  <p className="text-[16px] leading-relaxed">
                    Our Privacy Policy explains how we collect, use, and protect
                    your data. Find it in the app under Settings → Legal →
                    Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-[600] mb-3">FAQ</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[20px] font-[500] mb-3">
                    General Questions
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: What is the Pomodoro Technique?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: The Pomodoro Technique is a time management method
                        developed by Francesco Cirillo. It involves working in
                        focused 25-minute sessions followed by short breaks to
                        maintain concentration and prevent burnout.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: Can I use Pomofy offline?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Yes! Pomofy works perfectly offline. Only cloud sync
                        and Pro features require internet connection.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: How do I sync my settings across devices?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Sign in with your Google/Apple account, and your
                        settings will automatically sync across all your
                        devices.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: Can I customize the timer sounds?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Currently, Pomofy uses preset sounds for timer
                        completion. Custom sounds may be added in future
                        updates.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-3">Pro Features</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: What&apos;s the difference between Free and Pro?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Free includes basic timer functionality with limited
                        fonts and gradients. Pro includes unlimited fonts,
                        premium gradients, custom images, and ad-free
                        experience. For future updates, Pro will include more
                        features and enhancements.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: How do I upgrade to Pro?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Tap the profile icon → Subscription → Choose the Pro
                        plan → Complete purchase through your app store.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: Can I get a refund for my Pro purchase?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Refund requests are subject to your app store&apos;s
                        policies. Contact your app store for refund requests.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: Do Pro features work offline?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Most Pro features work offline, but custom images
                        require internet for initial upload.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px] font-[500] mb-3">
                    Technical Support
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: The app crashes when I open it
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Try restarting the app, then your device. If the
                        issue persists, contact support with your device
                        information.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: My settings aren&apos;t syncing
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Check your internet connection and try signing out
                        and back in. Contact support if the issue continues.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: The timer sound isn&apos;t working
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Check your device volume and ensure sound is enabled
                        in Pomofy settings. Verify the app has audio
                        permissions.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-[500] mb-2">
                        Q: How do I reset all my settings?
                      </h4>
                      <p className="text-[16px] leading-relaxed">
                        A: Go to Settings → Reset All Settings. This will
                        restore default values but won&apos;t affect your
                        account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-8 p-4 bg-white/50 rounded-[20px]">
              <h2 className="text-[24px] font-[600] mb-3">Thank You</h2>
              <p className="text-[16px] leading-relaxed mb-4">
                Thank you for choosing Pomofy! We&apos;re committed to providing
                you with the best Pomodoro timer experience possible. If you
                have any questions or feedback, please don&apos;t hesitate to
                reach out to our support team.
              </p>
              <p className="text-[20px] font-[600]">Happy focusing! 🎯</p>
              <p className="text-[14px] text-gray-600 mt-4">
                Last updated: July 2025
                <br />
                Support Email:{" "}
                <a
                  href="mailto:nosiahstudio@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  nosiahstudio@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
