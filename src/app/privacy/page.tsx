import { Container } from "@/components/ui/Container";

export default function PrivacyPolicy() {
    return (
        <Container className="py-32 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Last Updated: December 22, 2025</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">Introduction</h2>
                    <p>
                        Welcome to Drobe AI. Your privacy is extremely important to us. This Privacy Policy explains how our iOS mobile application ("App") handles your information when you use our wardrobe digitization and outfit recommendation services.
                    </p>
                    <p>
                        <strong>Our Core Privacy Commitment:</strong> Drobe AI is designed with privacy as a fundamental principle. We do not collect, store, or share your personal data. All photo processing happens securely, and we maintain strict privacy standards to protect your information.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">1. Information We Do NOT Collect</h2>
                    <p>
                        Drobe AI is committed to your privacy. We want to be clear about what we do NOT collect:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>No Personal Identifiable Information:</strong> We do not collect your name, email address, phone number, physical address, or any other personal identifiers unless you voluntarily provide them when contacting support.</li>
                        <li><strong>No Photo Storage:</strong> Photos you take of your clothing items are processed for the purpose of digitizing your wardrobe but are not permanently stored on our servers. Photos are processed transiently and securely.</li>
                        <li><strong>No Tracking or Analytics:</strong> We do not use third-party analytics, tracking pixels, or advertising networks to monitor your behavior or usage patterns.</li>
                        <li><strong>No Location Data:</strong> We do not collect or track your precise or approximate geographic location.</li>
                        <li><strong>No Biometric Data:</strong> We do not collect fingerprints, facial recognition data, or any other biometric information.</li>
                        <li><strong>No Contact List Access:</strong> We do not access or collect information from your contacts, address book, or social media accounts.</li>
                        <li><strong>No Device Information:</strong> We do not collect detailed device identifiers, advertising IDs, or device-specific information beyond what is necessary for the app to function.</li>
                        <li><strong>No Browsing History:</strong> We do not track or collect your web browsing history or online activities outside the app.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">2. Camera Access and Photo Processing</h2>
                    <p>
                        <strong>2.1 Camera Permission:</strong> Drobe AI requires access to your device's camera to enable you to take photos of your clothing items. This is the core functionality of the app. You can grant or revoke camera access at any time through your iPhone's Settings app under Privacy &gt; Camera &gt; Drobe AI.
                    </p>
                    <p>
                        <strong>2.2 How Photos Are Used:</strong> When you take a photo of a clothing item within the app, the photo is used exclusively to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Identify and categorize the clothing item (e.g., shirt, pants, dress)</li>
                        <li>Extract visual attributes such as color, pattern, and style</li>
                        <li>Create a digital representation of your wardrobe</li>
                        <li>Generate personalized outfit recommendations based on your wardrobe</li>
                    </ul>
                    <p>
                        <strong>2.3 Photo Processing:</strong> All photo processing is performed using automated artificial intelligence technology. Your photos are processed securely and are not manually reviewed by any person unless you explicitly request technical support and provide consent.
                    </p>
                    <p>
                        <strong>2.4 Photo Retention:</strong> Photos are processed transiently for the purpose of providing app functionality. We do not maintain permanent copies of your original photos. Only the digital catalog data (such as item type, color, and attributes) is retained to provide the wardrobe management service.
                    </p>
                    <p>
                        <strong>2.5 No Photo Sharing:</strong> Your photos are never shared with third parties, sold to advertisers, or used for any purpose other than providing the app's core functionality to you.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">3. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect any data processed through the app:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Encryption:</strong> All data transmitted between your device and our servers uses secure HTTPS encryption protocols.</li>
                        <li><strong>Secure Processing:</strong> Photo processing occurs in a secure, isolated environment designed to protect your privacy.</li>
                        <li><strong>Limited Access:</strong> Only authorized personnel with a legitimate need can access system infrastructure, and they are bound by strict confidentiality obligations.</li>
                        <li><strong>Regular Security Audits:</strong> We regularly review and update our security practices to protect against unauthorized access, disclosure, or destruction of data.</li>
                    </ul>
                    <p>
                        However, please be aware that no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">4. Third-Party Services</h2>
                    <p>
                        <strong>4.1 Apple App Store:</strong> Drobe AI is distributed through the Apple App Store. Any information collected by Apple, including payment information for in-app purchases or subscriptions, is governed by Apple's Privacy Policy, not this policy. We do not have access to your App Store payment information.
                    </p>
                    <p>
                        <strong>4.2 AI Processing:</strong> We may use third-party artificial intelligence and machine learning services to process photos and generate outfit recommendations. These services are carefully selected and are bound by strict data processing agreements to ensure your privacy is protected. They do not use your data for their own purposes or to train general AI models.
                    </p>
                    <p>
                        <strong>4.3 No Advertising Networks:</strong> We do not integrate third-party advertising networks or allow third parties to serve ads within the app.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">5. Children's Privacy</h2>
                    <p>
                        Drobe AI is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information immediately. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at{" "}
                        <a href="mailto:keshav-krishnan@outlook.com" className="text-foreground underline">
                            keshav-krishnan@outlook.com
                        </a>.
                    </p>
                    <p>
                        For users in the European Economic Area, the age threshold may be higher based on local laws. We comply with applicable age restrictions for data collection in all jurisdictions where the app is available.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">6. Your Privacy Rights</h2>
                    <p>
                        Because we do not collect or store personal data, there is minimal personal information for you to manage. However, you maintain the following rights:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Right to Access:</strong> You can contact us to inquire about any data processing activities related to your use of the app.</li>
                        <li><strong>Right to Delete:</strong> You can delete the app at any time to remove any locally stored data from your device. If you have an account, you can request account deletion by contacting us.</li>
                        <li><strong>Right to Revoke Permissions:</strong> You can revoke camera access or any other permissions granted to the app through your iPhone's Settings at any time.</li>
                        <li><strong>Right to Object:</strong> If you object to any data processing activities, you can stop using the app or contact us with your concerns.</li>
                        <li><strong>Right to Data Portability:</strong> While we do not store extensive personal data, you can request any available data related to your usage by contacting us.</li>
                    </ul>
                    <p>
                        For users in California, the European Economic Area, and other jurisdictions with specific privacy regulations, you may have additional rights under applicable law. Please contact us to exercise these rights.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">7. International Data Transfers</h2>
                    <p>
                        If you are accessing the app from outside the United States, please be aware that any information processed through the app may be transferred to, stored, and processed in the United States or other countries where our service providers operate. These countries may have data protection laws that differ from your country of residence.
                    </p>
                    <p>
                        By using the app, you consent to the transfer of information to countries outside your country of residence, including the United States, which may have different data protection rules. We take appropriate safeguards to ensure your privacy is protected in accordance with this Privacy Policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes to this Privacy Policy, we will notify you by:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Posting the updated Privacy Policy within the app</li>
                        <li>Updating the "Last Updated" date at the top of this policy</li>
                        <li>Providing a notification through the app or via email if we have your email address</li>
                    </ul>
                    <p>
                        We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your privacy. Your continued use of the app after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">9. Data Retention</h2>
                    <p>
                        Because we do not collect or permanently store personal data or photos, there is minimal data to retain. Any transient data used for photo processing is deleted shortly after processing is complete.
                    </p>
                    <p>
                        If you create an account or wardrobe profile, we retain the digital catalog data (item types, colors, attributes) until you delete your account or request deletion. You can request deletion of your data at any time by contacting us.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">10. Compliance with Laws</h2>
                    <p>
                        We may disclose information if required to do so by law or in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Comply with a legal obligation, court order, or government request</li>
                        <li>Protect and defend our rights or property</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the app</li>
                        <li>Protect the personal safety of users of the app or the public</li>
                        <li>Protect against legal liability</li>
                    </ul>
                    <p>
                        However, given that we do not collect personal data, there is minimal information that would be subject to such requests.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">11. California Privacy Rights (CCPA)</h2>
                    <p>
                        If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Right to Know:</strong> You have the right to request information about the personal information we collect, use, disclose, or sell.</li>
                        <li><strong>Right to Delete:</strong> You have the right to request deletion of personal information we have collected from you.</li>
                        <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information. However, we do not sell personal information.</li>
                        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
                    </ul>
                    <p>
                        To exercise these rights, please contact us at{" "}
                        <a href="mailto:keshav-krishnan@outlook.com" className="text-foreground underline">
                            keshav-krishnan@outlook.com
                        </a>. We will respond to your request within 45 days.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">12. European Privacy Rights (GDPR)</h2>
                    <p>
                        If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR):
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Right of Access:</strong> You have the right to request access to your personal data.</li>
                        <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate personal data.</li>
                        <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data.</li>
                        <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing of your personal data.</li>
                        <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used format.</li>
                        <li><strong>Right to Object:</strong> You have the right to object to processing of your personal data.</li>
                        <li><strong>Right to Withdraw Consent:</strong> If processing is based on consent, you have the right to withdraw consent at any time.</li>
                    </ul>
                    <p>
                        To exercise these rights, please contact us at{" "}
                        <a href="mailto:keshav-krishnan@outlook.com" className="text-foreground underline">
                            keshav-krishnan@outlook.com
                        </a>.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">13. Do Not Track Signals</h2>
                    <p>
                        Some web browsers and devices permit you to broadcast a preference that you not be "tracked" online. Because we do not track your online activities, we do not currently respond to "Do Not Track" signals. However, our app does not track you across third-party websites or services, so such signals are not applicable to our app.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">14. Contact Us</h2>
                    <p>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                    </p>
                    <p className="font-medium">
                        Email:{" "}
                        <a href="mailto:keshav-krishnan@outlook.com" className="text-foreground underline">
                            keshav-krishnan@outlook.com
                        </a>
                    </p>
                    <p>
                        We will respond to your inquiry as promptly as possible, typically within 48-72 hours during business days.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground mt-8">15. Apple App Store Compliance</h2>
                    <p>
                        This app complies with Apple's App Store Review Guidelines and Apple's requirements for privacy disclosures. All required privacy information is accurately disclosed in the App Store listing and within this Privacy Policy.
                    </p>
                    <p>
                        If you have concerns about privacy or data handling, you may also contact Apple Support or report the app through the App Store.
                    </p>
                </section>

                <section className="space-y-4 mt-12 pt-8 border-t border-border">
                    <h2 className="text-2xl font-semibold text-foreground">Your Privacy Matters</h2>
                    <p>
                        At Drobe AI, we believe that fashion and technology should enhance your life without compromising your privacy. We are committed to maintaining the highest standards of privacy protection and transparency.
                    </p>
                    <p>
                        By using Drobe AI, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                    </p>
                    <p className="text-sm italic">
                        Thank you for trusting Drobe AI with your digital wardrobe experience.
                    </p>
                </section>
            </div>
        </Container>
    );
}
