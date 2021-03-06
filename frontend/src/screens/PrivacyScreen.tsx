import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../components'
import store from '../store'
import { storageUtils } from '../utils'
import { storage } from '../models'

const PrivacyScreen = () => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const { goToNextPage } = useContext(store)

  const pages = [
    '<p>Hack the crisis built the Spread The Queue app as an Open Source app. This SERVICE is provided by Hack the crisis at no cost and is intended for use as is.</p><p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p><p>If you choose to use our Service, then you agree to the use of information in relation to this policy. The Personal Information is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p><p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Spread The Queue unless otherwise defined in this Privacy Policy.</p>',
        `<h1 id="information-collection-and-used">Information Collection and Used</h1>
        <p>
          For a better experience, while using our Service, we may require you to provide us with
          certain personally identifiable information. The information that we request will be
          retained on your device and is not collected by me in any way. The app does use third
          party services that may collect information used to identify you. Link to privacy policy
          of third party service providers used by the app
        </p>`,
        `        <h1 id="cookies">Cookies</h1>
        <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique
          identifiers. These are sent to your browser from the websites that you visit and are
          stored on your device&#39;s internal memory. This Service does not use these “cookies”
          explicitly. However, the app may use third party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to either accept or
          refuse these cookies and know when a cookie is being sent to your device. If you choose to
          refuse our cookies, you may not be able to use some portions of this Service. Service
          Providers
        </p>`,
        ` <p>We may employ third-party companies and individuals due to the following reasons:</p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
          We want to inform users of this Service that these third parties have access to your
          Personal Information. The reason is to perform the tasks assigned to them on our behalf.
          However, they are obligated not to disclose or use the information for any other purpose.
        </p>`,
        `<p>#Security</p>
        <p>
          We value your trust in providing us your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. But remember that no method of
          transmission over the internet, or method of electronic storage is 100% secure and
          reliable, and we cannot guarantee its absolute security.
        </p>
        <p>#Links to Other Sites</p>
        <p>
          This Service may contain links to other sites. If you click on a third-party link, you
          will be directed to that site. Note that these external sites are not operated by us.
          Therefore, I strongly advise you to review the Privacy Policy of these websites. We have
          no control over and assume no responsibility for the content, privacy policies, or
          practices of any third-party sites or services.
        </p>`,
        `<h1 id="children-s-privacy">Children’s Privacy</h1>
        <p>
          These Services do not address anyone under the age of 13. We do not knowingly collect
          personally identifiable information from children under 13. In the case where we discover
          that a child under 13 has provided us with personal information, we immediately delete
          this from our servers. If you are a parent or guardian and you are aware that your child
          has provided us with personal information, please contact us so that we will be able to do
          necessary actions.
        </p>`,
        `<h1 id="changes-to-this-privacy-policy">Changes to This Privacy Policy</h1>
        <p>
          We may update our Privacy Policy from time to time. Thus, you are advised to review this
          page periodically for any changes. We will notify you of any changes by posting the new
          Privacy Policy on this page. These changes are effective immediately after they are posted
          on this page.
        </p>
        <p>#Contact Us</p>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to
          contact us at info@spreadthequeue.com.
        </p>`
  ]

  useEffect(() => {
    const showPrivacy = storageUtils.getItem(storage.Key.ShowPrivacy)
    if (showPrivacy) goToNextPage()
  }, [])

  const handleCardAction = () => {
    if (pageIndex === pages.length - 1) {
      storageUtils.setItem(storage.Key.ShowPrivacy, 'false')
      goToNextPage()
    } else {
      setPageIndex(pageIndex + 1)
    }
  }

  return (
    <article id="container">
      <Card
        id="card"
        title="Privacy Policy - We never store sensitive personal information"
        buttonText={pageIndex === pages.length - 1 ? 'Accept' : 'Next'}
        handleCardAction={handleCardAction}
      >
        <div id='message'>
          {pages[pageIndex]}
        </div>
      </Card>
    </article>
  )
}

export default PrivacyScreen
