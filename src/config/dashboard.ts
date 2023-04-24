import {
  MdMail,
  MdAnalytics,
  MdCloudDownload,
  MdContactSupport,
  MdDomain,
  MdExtension,
  MdGroup,
  MdLabel,
  MdLibraryBooks,
  MdQuestionAnswer,
  MdSelectAll,
  MdShare,
  MdThumbUp,
  MdWeb,
  MdWidgets
} from "react-icons/md";
import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [],
  sidebarNav: [
    {
      title: `Collect`,
      isTitle: true
    },
    {
      title: `Forms`,
      href: `/account/forms`,
      icon: MdSelectAll
    },
    {
      title: `Import Reviews`,
      href: `/account/import-reviews`,
      icon: MdCloudDownload
    },

    {
      title: `Manage`,
      isTitle: true
    },
    {
      title: `Reviews`,
      href: `/account/reviews`,
      icon: MdThumbUp
    },
    {
      title: `Tags`,
      href: `/account/tags`,
      icon: MdLabel
    },
    {
      title: `Integrations`,
      href: `/account/integrations`,
      icon: MdExtension
    },
    {
      title: `Analytics`,
      href: `/account/analytics`,
      icon: MdAnalytics
    },

    {
      title: `Share`,
      isTitle: true
    },
    {
      title: `Widgets`,
      href: `/account/widgets`,
      icon: MdWidgets
    },
    {
      title: `Landing Page`,
      href: `/account/landing-page`,
      icon: MdWeb
    },
    {
      title: `Social Sharing`,
      href: `/account/social-sharing`,
      icon: MdShare
    },
    {
      title: `Custom Domain`,
      href: `/account/custom-domain`,
      icon: MdDomain
    },

    // Might move settings to just one page
    // and add the link icon to sidebar footer
    // {
    //   title: "Settings",
    //   isTitle: true
    // },
    // {
    //   title: "Space Settings",
    //   href: "/account/space",
    //   icon: "reviews",
    // },
    // {
    //   title: "Team Management",
    //   href: "/account/teams",
    //   icon: "search",
    // },
    // {
    //   title: "Notifications",
    //   href: "/account/notifications",
    //   icon: "search",
    // },
    // {
    //   title: "Privacy & Security",
    //   href: "/account/security",
    //   icon: "search",
    // },
    // {
    //   title: "Billing",
    //   href: "/account/billing",
    //   icon: "search",
    // },

    {
      title: `Help & Support`,
      isTitle: true
    },
    {
      title: `Knowledge Base`,
      href: `/account/knowledge-base`,
      icon: MdLibraryBooks
    },
    {
      title: `FAQ`,
      href: `/account/faq`,
      icon: MdQuestionAnswer
    },
    {
      title: `Support Ticket`,
      href: `/account/support`,
      icon: MdContactSupport
    },
    {
      title: `Community`,
      href: `/account/community-forum`,
      icon: MdGroup
    },
    {
      title: `Contact Us`,
      href: `/account/contact-us`,
      icon: MdMail
    }
  ]
};
/**
 * Second version
 */

// SETTINGS

// Profile

// Account Info
// Profile Info
// Notifications

// Branding

// Logo & Colors
// Customizable Templates

// Integrations

// Google Analytics
// Zapier
// Slack
// Salesforce
// HubSpot

// Team

// Team Management
// User Roles & Permissions
// Collaboration
// HELP & SUPPORT

// Knowledge Base

// FAQs
// Video Tutorials
// User Guides

// Support

// Live Chat
// Email Support
// Phone Support

// Feedback

// User Voice
// Feature Requests
