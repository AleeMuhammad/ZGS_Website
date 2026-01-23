"use client"
import { easeInOut, motion } from "motion/react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Privacy Policy - Zain General Store",
//   description: "Privacy Policy",
// };

export default function PrivacyPolicy() {
  return (
    <section className="mt-20 px-4 sm:px-8 max-w-4xl mx-auto text-gray-800">
      <motion.h1 initial={{ opacity: 0, x: -300 }} transition={{ ease: easeInOut, duration: 1,delay:0.1 }} animate={{ opacity: 1, x: 0 }} className="text-center text-4xl font-medium tracking-tight sm:text-5xl mb-20">
        Privacy Policy
      </motion.h1>

      <motion.div   initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  // viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
    delay: 0.1,
  }}  className=" space-y-6 text-base leading-relaxed">
        <p>
          <strong>Zain General Store</strong> built the ZainGeneralStore app as a
          Free app. This App is provided by Zain General Store at no cost and is
          intended for use as is.
        </p>

        <p>
          This page is used to inform app visitors regarding our policies with
          the collection, use, and disclosure of Personal Information if anyone
          decided to use our Service, the ZainGeneralStore app.
        </p>

        <p>
          If you choose to use our App, then you agree to the collection and use
          of information in relation with this policy. The Personal Information
          that we collect are used for providing and improving the Services. We
          will not use or share your information with anyone except as described
          in this Privacy Policy.
        </p>

        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible in the ZainGeneralStore app,
          unless otherwise defined in this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Information Collection and Use
        </h2>
        <p>
          For a better experience while using our App, we may require you to
          provide us with certain personally identifiable information, including
          but not limited to your name. The
          information that we collect will be used to contact or identify you.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Log Data</h2>
        <p>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (IP)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Service Providers</h2>
        <p>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>To facilitate our Service</li>
          <li>To provide the Service on our behalf</li>
          <li>To perform Service-related services</li>
          <li>To assist us in analyzing how our App is used</li>
        </ul>

        <p>
          We want to inform our App users that these third parties have access to
          your Personal Information. The reason is to perform the tasks assigned
          to them on our behalf. However, they are obligated not to disclose or
          use the information for any other purpose.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Security</h2>
        <p>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Links to Other Sites</h2>
        <p>
          Our Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Children’s Privacy</h2>
        <p>
          Our Services do not address anyone under the age of 13. We do not
          knowingly collect personal identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers.
        </p>

        <p>
          If you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact us so that we
          will be able to do necessary actions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately after they are posted on this
          page.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at:
        </p>

        <p className="font-medium">
          📧{" "}
          <a
            href="mailto:aliraza.lalani12@gmail.com"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            aliraza.lalani12@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
