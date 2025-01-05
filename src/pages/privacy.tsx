function Privacy() {
  const company = 'Gympal';
  const author = 'Audun Hilden';

  return (
    <main className={'h-full  px-6 text-on-100 pb-8'}>
      <div className="max-w-6xl mx-auto mt-14">
        <div className="max-w-6xl mx-auto text-xl leading-10 space-y-10">
          <section className="space-y-3">
            <h1 className="text-3xl font-bold max-w-3xl text-white">
              Privacy Policy
            </h1>
            <h4 className="text-sm text-white/80">
              Last revised on November 2, 2024
            </h4>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Introduction
            </h1>
            <p>
              {company} ("we", "our", or "us") take privacy, transparency and
              security seriously.
            </p>
            <p className="mt-4">
              This privacy policy applies to the {company} app (hereby referred
              to as "Application") for mobile devices that was created by{' '}
              {author} (hereby referred to as "Service Provider") as a Freemium
              service. This service is intended for use "AS IS".
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Information Collection and Use
            </h1>
            <p>
              The Application collects information when you download and use it.
              This information may include information such as{' '}
            </p>
            <ul className="pl-8 space-y-5 list-disc list-inside">
              {/* <li>Your device's Internet Protocol address (e.g. IP address)</li> */}
              <li>
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </li>
              {/* <li>The time spent on the Application</li> */}
              <li>The operating system you use on your mobile device</li>
            </ul>

            <div>
              <p>
                The Application collects your device's location, which helps the
                Service Provider determine your approximate geographical
                location and make use of in below ways:
              </p>
              <ul className="pl-8 space-y-5 list-disc list-inside">
                <li>
                  <span className="text-white/80 font-medium">
                    Geolocation Services:
                  </span>{' '}
                  The Service Provider utilizes location data to provide
                  features such as personalized content, relevant
                  recommendations, and location-based services.
                </li>
                <li>
                  <span className="text-white/80 font-medium">
                    Analytics and Improvements:
                  </span>{' '}
                  Aggregated and anonymized location data helps the Service
                  Provider to analyze user behavior, identify trends, and
                  improve the overall performance and functionality of the
                  Application.
                </li>
                {/* <li>
                  <span className="text-white/80 font-medium">
                    Third-Party Services:
                  </span>{' '}
                  Periodically, the Service Provider may transmit anonymized
                  location data to external services. These services assist them
                  in enhancing the Application and optimizing their offerings.
                </li> */}
              </ul>
            </div>
            <p>
              The Service Provider may use the information you provided to
              contact you from time to time to provide you with important
              information, required notices and marketing promotions.
            </p>
            <p>
              For a better experience, while using the Application, the Service
              Provider may require you to provide us with certain personally
              identifiable information, including but not limited to Name,
              Email, Birthday, Weight, Activities and Geographical location. The
              information that the Service Provider request will be retained by
              them and used as described in this privacy policy.
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Third Party Access
            </h1>
            <p>
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application and their service. The Service Provider may share your
              information with third parties in the ways that are described in
              this privacy statement.
            </p>
            <div>
              <p>
                Please note that the Application utilizes third-party services
                that have their own Privacy Policy about handling data. Below
                are the links to the Privacy Policy of the third-party service
                providers used by the Application:
              </p>
              <ul className="pl-8 space-y-5 list-disc list-inside">
                <li>
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://expo.io/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Expo
                  </a>
                </li>
              </ul>
            </div>
            <p>
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </p>
            <ul className="pl-8 space-y-5 list-disc list-inside">
              <li>
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </li>
              <li>
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;
              </li>
              <li>
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information we disclose to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement.
              </li>
            </ul>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Opt-Out Rights
            </h1>
            <p>
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via
              the mobile application marketplace or network.
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Data Retention Policy
            </h1>
            <p>
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you'd like them to delete User Provided Data that you have
              provided via the Application, please contact them at{' '}
              <a
                href="mailto:audun@gympal.com"
                className="text-white hover:underline animate"
              >
                audun@gympal.com
              </a>{' '}
              and they will respond in a reasonable time.
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">Children</h1>
            <p>
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            <div>
              <p>
                The Application does not address anyone under the age of 13. The
                Service Provider does not knowingly collect personally
                identifiable information from children under 13 years of age. In
                the case the Service Provider discover that a child under 13 has
                provided personal information, the Service Provider will
                immediately delete this from their servers. If you are a parent
                or guardian and you are aware that your child has provided us
                with personal information, please contact the Service Provider (
                <a
                  href="mailto:audun@gympal.com"
                  className="text-white hover:underline animate"
                >
                  audun@gympal.com
                </a>
                ) so that they will be able to take the necessary actions.
              </p>
            </div>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">Security</h1>
            <p>
              The Service Provider is concerned about safeguarding the
              confidentiality of your information. The Service Provider provides
              physical, electronic, and procedural safeguards to protect
              information the Service Provider processes and maintains.
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">Changes</h1>
            <p>
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Your Consent
            </h1>
            <p>
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>
          </section>
          <section className="space-y-5">
            <h1 className="mb-3 text-2xl font-semibold text-white">
              Contact Information
            </h1>
            <p>
              If you require additional information, please contact&nbsp;
              <a
                href="mailto:audun@gympal.com"
                className="text-white hover:underline animate"
              >
                audun@gympal.com
              </a>
              . If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at audun@gympal.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Privacy;
