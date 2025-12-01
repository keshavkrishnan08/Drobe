import { Container } from "@/components/ui/Container";
import { Mail, RefreshCw, Smartphone, Wifi, AlertCircle } from "lucide-react";

export default function ContactUs() {
    return (
        <Container className="py-32 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-12">
                We're here to help! If you're experiencing issues or have questions, check out our troubleshooting tips below or reach out to us directly.
            </p>

            {/* Contact Information */}
            <section className="mb-16 p-8 bg-muted/30 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-foreground" />
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    For support, feedback, or general inquiries, please email us at:
                </p>
                <a
                    href="mailto:keshavkrishnanbusiness@gmail.com"
                    className="text-xl font-medium text-foreground hover:underline inline-flex items-center gap-2"
                >
                    keshavkrishnanbusiness@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                    We typically respond within 24-48 hours during business days.
                </p>
            </section>

            {/* Troubleshooting Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Troubleshooting Guide</h2>
                <p className="text-muted-foreground mb-8">
                    Before reaching out, try these common solutions that resolve most issues:
                </p>

                <div className="space-y-6">
                    {/* Restart App */}
                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent rounded-lg">
                                <RefreshCw className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Restart the App</h3>
                                <p className="text-muted-foreground mb-3">
                                    Many issues can be resolved by simply closing and reopening the app.
                                </p>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Swipe up from the bottom of your screen (or double-click the home button)</li>
                                    <li>Swipe up on the Drobe AI app to close it completely</li>
                                    <li>Reopen the app from your home screen</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Check Internet Connection */}
                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent rounded-lg">
                                <Wifi className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Check Your Internet Connection</h3>
                                <p className="text-muted-foreground mb-3">
                                    Drobe AI requires a stable internet connection to process images and generate outfits.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Ensure you're connected to Wi-Fi or have cellular data enabled</li>
                                    <li>Try switching between Wi-Fi and cellular data</li>
                                    <li>Test your connection by opening a web browser</li>
                                    <li>Move closer to your Wi-Fi router if the signal is weak</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Update App */}
                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent rounded-lg">
                                <Smartphone className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Update to the Latest Version</h3>
                                <p className="text-muted-foreground mb-3">
                                    Make sure you're running the most recent version of Drobe AI.
                                </p>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Open the App Store on your iPhone</li>
                                    <li>Tap your profile icon in the top right</li>
                                    <li>Scroll down to see pending updates</li>
                                    <li>If Drobe AI appears, tap "Update"</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Restart Device */}
                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent rounded-lg">
                                <Smartphone className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Restart Your iPhone</h3>
                                <p className="text-muted-foreground mb-3">
                                    A device restart can clear temporary glitches and free up memory.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Press and hold the power button and volume button</li>
                                    <li>Slide to power off</li>
                                    <li>Wait 30 seconds, then turn your device back on</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Check Permissions */}
                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent rounded-lg">
                                <AlertCircle className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Check App Permissions</h3>
                                <p className="text-muted-foreground mb-3">
                                    Drobe AI needs camera access to function properly.
                                </p>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Open Settings on your iPhone</li>
                                    <li>Scroll down and tap "Drobe AI"</li>
                                    <li>Ensure "Camera" permission is enabled</li>
                                    <li>If disabled, toggle it on and restart the app</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Reinstall App */}
                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent rounded-lg">
                                <RefreshCw className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Reinstall the App</h3>
                                <p className="text-muted-foreground mb-3">
                                    If problems persist, try deleting and reinstalling the app.
                                </p>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Press and hold the Drobe AI app icon</li>
                                    <li>Tap "Remove App" → "Delete App"</li>
                                    <li>Go to the App Store and search for "Drobe AI"</li>
                                    <li>Download and install the app again</li>
                                    <li>Log back in with your account</li>
                                </ol>
                                <p className="text-sm text-amber-600 mt-2">
                                    ⚠️ Note: Your data is stored in the cloud, so you won't lose your wardrobe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Issues */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Common Issues</h2>
                <div className="space-y-4">
                    <details className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <summary className="font-semibold cursor-pointer text-lg">
                            Photos aren't uploading or processing
                        </summary>
                        <p className="mt-3 text-muted-foreground">
                            Check your internet connection and ensure you have enough storage space on your device. Also verify that camera permissions are enabled in Settings.
                        </p>
                    </details>

                    <details className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <summary className="font-semibold cursor-pointer text-lg">
                            Outfit recommendations aren't appearing
                        </summary>
                        <p className="mt-3 text-muted-foreground">
                            Make sure you've uploaded at least 5-10 clothing items to your wardrobe. The AI needs sufficient data to generate personalized recommendations.
                        </p>
                    </details>

                    <details className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <summary className="font-semibold cursor-pointer text-lg">
                            App is running slowly or freezing
                        </summary>
                        <p className="mt-3 text-muted-foreground">
                            Try closing other apps running in the background, restart the app, or restart your device. Ensure you have the latest version installed.
                        </p>
                    </details>

                    <details className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <summary className="font-semibold cursor-pointer text-lg">
                            Can't log in or forgot password
                        </summary>
                        <p className="mt-3 text-muted-foreground">
                            Use the "Forgot Password" option on the login screen. If you continue having issues, contact us at keshavkrishnanbusiness@gmail.com.
                        </p>
                    </details>
                </div>
            </section>

            {/* Still Need Help */}
            <section className="p-8 bg-foreground text-background rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-3">Still Need Help?</h2>
                <p className="mb-6 text-background/80">
                    If you've tried these steps and are still experiencing issues, we're here to help.
                </p>
                <a
                    href="mailto:keshavkrishnanbusiness@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    Email Support
                </a>
            </section>
        </Container>
    );
}
