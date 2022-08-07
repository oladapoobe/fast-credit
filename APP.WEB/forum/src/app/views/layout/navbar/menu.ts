import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    label: 'Personal Help',
    icon: 'user',
    link: '/general/personalhelp',

  },
  {
    label: 'Admin Setup',
    icon: 'settings',
    subMenus: [
      {
        subMenuItems: [
          
           {
            label: 'Chat group',
            link: '/general/chatgroup'
          },
          {
            label: 'Community topic',
            link: '/general/communitytopic'
          },
          {
            label: 'Group peer into community topic',
            link: '/general/grouppeerintocommunitytopic'
          },
        ]
      },
    ]
  },

  {
    label: 'Settings',
    icon: 'settings',
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Change Password',
            link: '/settings/changepassword',
          },
        ]
      },
    ]
  },

  {
    label: 'Manage Users',
    icon: 'user',
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Setup users',
            link: '/settings/setup-users',
          },
          {
            label: 'Approve-therapist',
            link: '/general/approve-therapist',
          },
          {
            label: 'Approved-therapist',
            link: '/general/approved-therapist',
          },
          {
            label: 'Rejected-therapist',
            link: '/general/rejected-therapist',
          },
         
        ]
      },
    ]
  },
   {
     label: 'Portfolio',
     icon: 'user',
     link: '/general/portfolio',
    
  },

   {
     label: 'Feedback History',
     icon: 'activity',
     subMenus: [
       {
         subMenuItems: [
           {
             label: 'All Feedback',
             link: '/general/allfeedback',
           },
           {
             label: 'Feedback-User',
             link: '/general/alluserFeedback',
           },
           {
             label: 'Feedback-Therapist',
             link: '/general/allfeedbacktherapist',
           },
         ]
       },
     ]
  },
   {
     label: 'Service Log',
     icon: 'shopping-cart',
     subMenus: [
       {
         subMenuItems: [
           {
             label: 'All Service Log',
             link: '/general/all payment history',
           },
           {
             label: 'Service Log-User',
             link: '/general/payment history',
           },
         
         ]
       },
     ]


  },



];



