import React from 'react';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: 'Privacy Policy - Neuralteq',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#021019] text-[#021019] dark:text-[#ECFBFA]">
      <Header />
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <FadeInUp delay={0.0}>
            <div className="relative mb-16 md:mb-[64px]">
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Privacy Policy
              </PageTitle>
            </div>
            <IntroText className="mb-16 md:mb-[64px]">
              At Neuralteq, accessible from our website https://www.neuralteq.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Neuralteq and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </IntroText>
          </FadeInUp>
          </CenteredContent>
         
          <CenteredContent>
          <FadeInUp delay={0.0}>
            <BodyText className="space-y-6 md:space-y-8 mb-8">
              <PageSubtitle className="mb-4">Log files</PageSubtitle>
              <p>
                Neuralteq follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
              </p>
              <PageSubtitle className="mb-4">Privacy Policies</PageSubtitle>
              <p>
                You may consult this list to find the Privacy Policy for each of the advertising partners of Neuralteq.
              </p>
              <p>
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Neuralteq, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>
              <p>
                Note that Neuralteq has no access to or control over these cookies that are used by third-party advertisers.
              </p>
              <PageSubtitle className="mb-4">Third Party Privacy Policies</PageSubtitle>
              <p>
                Neuralteq's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
              <p>
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </p>
              <PageSubtitle className="mb-4">Children's Information</PageSubtitle>
              <p>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
              </p>
              <p>
                Neuralteq does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </p>
              <PageSubtitle className="mb-4">Online Privacy Policy Only</PageSubtitle>
              <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in . Neuralteq's policy is not applicable to any information collected offline or via channels other than this website.
              </p>
              <PageSubtitle className="mb-4">Consent</PageSubtitle>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </BodyText>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-32 z-50">
        <Footer />
      </div>
    </div>
  );
} 