"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function DeleteAccountPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) return;
    
    setLoading(true);
    // TODO: API call to send OTP
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) return;
    
    setLoading(true);
    // TODO: API call to verify OTP and delete account
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1000);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon icon="ph:check-circle" className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-dark dark:text-white mb-4">
            Request Submitted
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your account deletion request has been received. We will process it within 30 days and send a confirmation email to {email}.
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark py-16 px-4">
      <div className="container mx-auto max-w-2xl mt-10">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex items-start gap-3">
            <Icon icon="ph:warning" className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-1">Warning: This action cannot be undone</h3>
              <p className="text-sm text-red-700 dark:text-red-400">
                Deleting your account will permanently remove all your data, bookings, and history from our system.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-dark dark:text-white mb-4">
          Delete Your Account
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          We&apos;re sorry to see you go. Please fill out the form below to request account deletion. This process may take up to 30 days to complete.
        </p>

        <form onSubmit={handleSendOTP} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-dark dark:text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-dark dark:text-white mb-2">
              Reason for Leaving (Optional)
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              placeholder="Help us improve by telling us why you&apos;re leaving"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-dark dark:text-white mb-3">What will be deleted:</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Icon icon="ph:check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your profile and personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="ph:check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>All booking history and service records</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="ph:check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Reviews and ratings you&apos;ve provided</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="ph:check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Saved preferences and settings</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Note: Some data may be retained for legal or regulatory compliance purposes as outlined in our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="confirm"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="confirm" className="text-sm text-gray-600 dark:text-gray-300">
              I understand that this action is permanent and cannot be undone. I want to delete my Kartsquare account and all associated data.
            </label>
          </div>

          <div className="flex gap-4">
            <Link
              href="/"
              className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-dark dark:text-white rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={!confirmed || loading}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Icon icon="ph:spinner" className="w-5 h-5 animate-spin" />
                  Sending OTP...
                </>
              ) : (
                "Send Verification Code"
              )}
            </button>
          </div>
        </form>

        {step === 2 && (
          <div className="mt-8 bg-white dark:bg-gray-800 border-2 border-primary rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon icon="ph:envelope" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark dark:text-white">Verification Code Sent</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Enter the 6-digit code sent to {email}</p>
              </div>
            </div>

            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-dark dark:text-white rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={otp.join("").length !== 6 || loading}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Icon icon="ph:spinner" className="w-5 h-5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify & Delete Account"
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleSendOTP}
                className="w-full text-sm text-primary hover:underline"
              >
                Didn&apos;t receive code? Resend
              </button>
            </form>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Need help or have questions? <Link href="/contactus" className="text-primary underline font-semibold">Contact our support team</Link> before deleting your account.
          </p>
        </div>
      </div>
    </div>
  );
}
