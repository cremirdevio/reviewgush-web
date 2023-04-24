import FA, { FaAddressCard, FaChartArea, FaCloudDownloadAlt, FaCommentAlt, FaConnectdevelop, FaGlobe, FaLink, FaPlug, FaPuzzlePiece, FaQuestion, FaSearch, FaShare, FaTags, FaTasks, FaTh, FaThumbsUp, FaTicketAlt, FaUsers, FaWpforms } from 'react-icons/fa';
import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [

  ],
  sidebarNav: [
    {
      title: "Collect",
      isTitle: true
    },
    {
      title: "Forms",
      href: "/account/forms",
      icon: FaWpforms,
    },
    {
      title: "Import Reviews",
      href: "/account/import-reviews",
      icon: FaCloudDownloadAlt,
    },

    {
      title: "Manage",
      isTitle: true
    },
    {
      title: "Reviews",
      href: "/account/reviews",
      icon: FaThumbsUp,
    },
    {
      title: "Tags",
      href: "/account/tags",
      icon: FaTags,
    },
    {
      title: "Integrations",
      href: "/account/integrations",
      icon: FaPlug,//fa-puzzle-piece, plug, link, share-alt
    },
    {
      title: "Analytics",
      href: "/account/analytics",
      icon: FaChartArea,
    },

    {
      title: "Share",
      isTitle: true
    },
    {
      title: "Widgets",
      href: "/account/widgets",
      icon: FaTh,
    },
    {
      title: "Landing Page",
      href: "/account/landing-page",
      icon: FaGlobe,
    },
    {
      title: "Social Sharing",
      href: "/account/social-sharing",
      icon: FaShare,
    },
    {
      title: "Custom Domain",
      href: "/account/custom-domain",
      icon: FaLink,
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
      title: "Help & Support",
      isTitle: true
    },
    {
      title: "Knowledge Base",
      href: "/account/knowledge-base",
      icon: FaQuestion,
    },
    {
      title: "FAQ",
      href: "/account/faq",
      icon: FaCommentAlt,
    },
    {
      title: "Support Ticket",
      href: "/account/support",
      icon: FaTicketAlt,
    },
    {
      title: "Community",
      href: "/account/community-forum",
      icon: FaUsers,
    },
    {
      title: "Contact Us",
      href: "/account/contact-us",
      icon: FaAddressCard,
    },
  ],
}
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

