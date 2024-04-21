"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="ptb-120">
      <div className="container">
        <div data-aos="fade-right">
          <h1 className="text-center text-primary">Privacy Policy</h1>
          <p className="text-center">
            <Link href="/" className="text-dark link-primary">
              Home{" "}
            </Link>
            » Privacy Policy
          </p>
        </div>
        <div className="mt-5" data-aos="fade-right">
          <p>
            <strong>PIXEL EDGE PRIVACY POLICY</strong>
          </p>

          <p>Last updated: 23, June 2023</p>
          <p>
            Thank you for using our app(s) and mobile game(s)! We are committed
            to protecting your privacy and ensuring the security of your
            personal information. This Privacy Policy explains how we collect,
            use, and disclose information when you use our app(s) and mobile
            game(s) provided through the Google platform. By using our app(s)
            and mobile game(s), you consent to the practices outlined in this
            Privacy Policy.
          </p>
        </div>

        <div data-aos="fade-right">
          <p>
            <strong>Information We Collect:</strong>
          </p>
          <p>
            (a) Personal Information: We do not collect any personally
            identifiable information (PII), such as your name, address, or
            contact details, directly through our app(s) and mobile game(s).
          </p>
          <p>
            (b) Device Information: We may collect certain information about
            your device, including but not limited to device model, operating
            system version, unique device identifiers, and mobile network
            information. This information is collected in an anonymized and
            aggregate form and is used for analytics purposes to improve the
            performance and functionality of our app(s) and mobile game(s).
          </p>
          <p>
            (c) Usage Information: We may collect non-personal information about
            how you use our app(s) and mobile game(s), such as the features you
            access, actions you take, and the duration of your usage sessions.
            This information is collected to enhance your app experience,
            improve our services, and provide personalized content.
          </p>
        </div>

        <div className="pt-5" data-aos="fade-right">
          <p>
            <strong>Third-Party Services:</strong>
          </p>
          <p>
            Our app(s) and mobile game(s) may include third-party services, such
            as analytics tools and advertising networks. These third-party
            services may collect and use information about your device and app
            usage in accordance with their respective privacy policies. We do
            not have control over the data collected by these third-party
            services, and we encourage you to review their privacy policies
            before using our app(s) and mobile game(s).
          </p>
        </div>

        <div data-aos="fade-right">
          <p>
            <strong>Advertising:</strong>
          </p>
          <p>
            We may display advertisements within our app(s) and mobile game(s).
            These advertisements may be provided by third-party advertising
            networks, which may collect certain information about your device
            and app usage to provide personalized ads. The information collected
            by these advertising networks is subject to their respective privacy
            policies, and we do not have control over their practices.
          </p>
        </div>
        <div className="pt-5" data-aos="fade-right">
          <p>
            <strong>ADVERTISING AND USER ACQUISITION PARTNERS:</strong>
          </p>
          <p>
            We use the following user acquisition and advertising partners, that
            are integrated into some or all the Games. Please check the
            following privacy policies to learn more about their privacy
            practices, including how you may exercise your data subject rights.
            This list was last updated on 23 June2023.
          </p>
        </div>

        <div data-aos="fade-right">
          <div>
            <p>
              <strong>MOBILE GAMES</strong>
            </p>
          </div>

          <div>
            <p>
              Advertising partner
              <span className="p-3">Link to Privacy Policy</span>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">AdColony </p>
            <p>
              <Link
                href="https://www.adcolony.com/privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://www.adcolony.com/privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">AdMob (Google) </p>
            <p>
              <Link
                href="https://policies.google.com/technologies/partner-site"
                className="text-dark link-primary text-break"
              >
                https://policies.google.com/technologies/partner-site
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">AdTiming </p>
            <p>
              <Link
                href="https://www.adtiming.com/privacy-policy.php"
                className="text-dark link-primary text-break"
              >
                https://www.adtiming.com/privacy-policy.php
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Bidstack </p>
            <p>
              <Link
                href="https://www.bidstack.com/privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://www.bidstack.com/privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Facebook </p>
            <p>
              <Link
                href="https://www.facebook.com/policy.php"
                className="text-dark link-primary text-break"
              >
                https://www.facebook.com/policy.php
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Fyber </p>
            <p>
              <Link
                href="https://www.fyber.com/legal/privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://www.fyber.com/legal/privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Instagram </p>
            <p>
              <Link
                href="https://help.instagram.com/519522125107875"
                className="text-dark link-primary text-break"
              >
                https://help.instagram.com/519522125107875
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">ironSource </p>
            <p>
              <Link
                href="https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Loopme </p>
            <p>
              <Link
                href="https://loopme.com/privacy/"
                className="text-dark link-primary text-break"
              >
                https://loopme.com/privacy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">MoPub </p>
            <p>
              <Link
                href="https://www.mopub.com/legal/privacy/"
                className="text-dark link-primary text-break"
              >
                https://www.mopub.com/legal/privacy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Snapchat </p>
            <p>
              <Link
                href="https://snap.com/en-US/privacy/privacy-policy"
                className="text-dark link-primary text-break"
              >
                https://snap.com/en-US/privacy/privacy-policy
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Tapjoy</p>
            <p>
              <Link
                href="https://www.tapjoy.com/legal/#privacy-policy"
                className="text-dark link-primary text-break"
              >
                https://www.tapjoy.com/legal/#privacy-policy
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">TapResearch </p>
            <p>
              <Link
                href="https://www.tapresearch.com/legal/privacy-policy-en"
                className="text-dark link-primary text-break"
              >
                https://www.tapresearch.com/legal/privacy-policy-en
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Unity Ads </p>
            <p>
              <Link
                href="https://unity3d.com/legal/privacy-policy"
                className="text-dark link-primary text-break"
              >
                https://unity3d.com/legal/privacy-policy
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Vungle </p>
            <p>
              <Link
                href="https://vungle.com/privacy/"
                className="text-dark link-primary text-break"
              >
                https://vungle.com/privacy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">BidMachine </p>
            <p>
              <Link
                href="https://bidmachine.io/privacy-policy/ and
              https://bidmachine.io/ccpa-privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://bidmachine.io/privacy-policy/ and
                https://bidmachine.io/ccpa-privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Anzu </p>
            <p>
              <Link
                href="https://www.anzu.io/privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://www.anzu.io/privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Frameplay </p>
            <p>
              <Link
                href="https://www.frameplay.gg/terms#Policy"
                className="text-dark link-primary text-break"
              >
                https://www.frameplay.gg/terms#Policy
              </Link>
            </p>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="pt-5">
            <p>
              <strong>WEBSITE </strong>
            </p>
          </div>

          <div>
            <p>
              Advertising partner
              <span className="p-3"> Link to Privacy Policy</span>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Google Doubleclick </p>
            <p>
              <Link
                href="https://policies.google.com/technologies/ads"
                className="text-dark link-primary text-break"
              >
                https://policies.google.com/technologies/ads
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Index Exchange </p>
            <p>
              <Link
                href="http://www.indexexchange.com/privacy/"
                className="text-dark link-primary text-break"
              >
                http://www.indexexchange.com/privacy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Lifestreet Media </p>
            <p>
              <Link
                href="http://www.lifestreet.com/privacy/"
                className="text-dark link-primary text-break"
              >
                http://www.lifestreet.com/privacy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Open X </p>
            <p>
              <Link
                href="https://www.openx.com/legal/privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://www.openx.com/legal/privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Pubmatic </p>
            <p>
              <Link
                href="https://pubmatic.com/legal/privacy-policy/"
                className="text-dark link-primary text-break"
              >
                https://pubmatic.com/legal/privacy-policy/
              </Link>
            </p>
          </div>

          <div className="d-inline d-lg-flex d-md-flex">
            <p className="pe-lg-3 pe-md-3">Rubicon Project </p>
            <p>
              <Link
                href="https://rubiconproject.com/privacy/"
                className="text-dark link-primary text-break"
              >
                https://rubiconproject.com/privacy/
              </Link>
            </p>
          </div>
        </div>
        <div className="pt-3" data-aos="fade-right">
          <p>
            <strong>Data Security:</strong>
          </p>
          <p>
            We take reasonable measures to protect the information collected
            through our app(s) and mobile game(s) from unauthorized access,
            loss, misuse, or alteration. However, please note that no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </div>

        <div data-aos="fade-right">
          <p>
            <strong>
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </strong>
          </p>

          <p className="lh-4">
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p className="h-4">
            Request that a business that collects a consumer’s personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p className="lh-4">
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p className="lh-4">
            Request that a business that sells a consumer’s personal data, not
            sell the consumer’s personal data.
          </p>
          <p className="lh-4">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className="pt-3" data-aos="fade-right">
          <p>
            <strong>GDPR Data Protection Rights</strong>
          </p>
          <p className="lh-4">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p className="lh-4">
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </p>
          <p className="lh-4">
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p className="lh-4">
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p className="lh-4">
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p className="lh-4">
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p className="lh-4">
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </p>
          <p className="lh-4">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className="pt-3" data-aos="fade-right">
          <p>
            <strong>Children’s Privacy:</strong>
          </p>
          <p>
            Our app(s) and mobile game(s) do not target or knowingly collect any
            personal information from children under the age of 13. If you
            believe we have inadvertently collected information from a child
            under 13, please contact us immediately, and we will take steps to
            remove the information from our systems.
          </p>
        </div>

        <div data-aos="fade-right">
          <p>
            <strong>Personal Data Deletion Process:</strong>
          </p>
          <p className="lh-4">
            We understand the importance of your privacy and provide you with
            the ability to request the deletion of any personal information that
            may have been inadvertently collected through our app(s) and mobile
            game(s). If you would like us to delete any personal data associated
            with you, please follow the steps outlined below:
          </p>
          <p className="lh-4">
            Submit a Deletion Request: Send an email to pixeledgeau@gmail.com
            with the subject line “Personal Data Deletion Request.” In the email
            body, clearly state your request for the deletion of your personal
            information from our app(s) and mobile game(s). Please provide any
            relevant details that can help us locate and identify your data.
          </p>
          <p className="lh-4">
            Verification Process: To ensure the security of your personal
            information, we may require additional verification to confirm your
            identity. This may include requesting specific information or
            documentation from you to validate your request.
          </p>
          <p className="lh-4">
            VProcessing Time: We will make every reasonable effort to process
            your deletion request in a timely manner, in compliance with
            applicable privacy laws and regulations. Please note that it may
            take some time to fully remove your data from our systems and
            backups, and residual copies may remain in our archived records for
            legal and audit purposes.
          </p>
          <p className="lh-4">
            Confirmation of Deletion: Once your personal information has been
            successfully deleted from our app(s) and mobile game(s), we will
            send you a confirmation email stating that your data has been
            permanently removed. Please note that we may retain certain
            non-personal information that does not identify you individually,
            for analytical and statistical purposes.
          </p>
          <p className="lh-4">
            Please be aware that we may not be able to fulfill your deletion
            request if it conflicts with our legal obligations or if we are
            required to retain certain data for legitimate business purposes or
            compliance with applicable laws.
          </p>
          <p className="lh-4">
            We are committed to protecting your privacy and maintaining the
            security of your personal information. If you have any further
            questions or concerns regarding the deletion of your personal data,
            please contact us at [email address], and we will be glad to assist
            you.
          </p>
          <p className="lh-4">
            Please note that this personal data deletion process applies solely
            to our app(s) and mobile game(s) and may not cover third-party
            services or platforms that you may have interacted with separately.
          </p>
        </div>

        <div className="pt-3" data-aos="fade-right">
          <p>
            <strong>Changes to this Privacy Policy:</strong>
          </p>
          <p>
            We reserve the right to modify or update this Privacy Policy at any
            time. We will provide notice of any material changes through our
            app(s) and mobile game(s), and it is your responsibility to review
            this Privacy Policy periodically. Your continued use of our app(s)
            and mobile game(s) after the changes have been made constitutes your
            acceptance of the updated Privacy Policy.
          </p>
        </div>

        <div data-aos="fade-right">
          <p>
            <strong>Contact Us:</strong>
          </p>
          <p className="lh-4">
            If you have any questions, concerns, or suggestions regarding this
            Privacy Policy or our privacy practices, please contact us at
            pixeledgeau@gmail.com. We will make our best effort to respond to
            your inquiry in a timely manner.
          </p>
          <p className="lh-4">
            Please note that this Privacy Policy only applies to our app(s) and
            mobile game(s) and not to any third-party websites, products, or
            services linked to or recommended within our app(s) and mobile
            game(s). We encourage you to review the privacy policies of those
            third-party services before providing any personal information.
          </p>
          <p className="lh-4">
            Thank you for your trust in us and for using our app(s) and mobile
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
