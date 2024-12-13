import { Content } from 'src/types/contentTypes'
import { Page } from 'src/types/landing'

export const dataSample: Content[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x400.png?text=Cat+Meme',
    title: 'Hilarious Cat Meme',
    description: 'When your cat decides to judge your life choices',
    platform: 'Instagram',
    type: 'image',
    aiGenerated: true,
    createdAt: 1733576257
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x400.png?text=Dog+Meme',
    title: 'Dog Humor',
    description: 'When your dog is too excited for a walk and you have to catch up',
    platform: 'Twitter',
    type: 'image',
    aiGenerated: false,
    createdAt: 1733576257
  }
]

export const LANDING_DATA: Page = {
  template: 'innovate',
  theme: 'dark',
  header: {
    brand: {
      title: 'AI News Agent',
      avatar: {
        src: '/imgs/ai-logo.png',
        title: 'AI News Agent'
      },
      url: '/'
    },
    nav: {
      items: [
        {
          title: 'Challenge',
          url: '#challenge'
        },
        {
          title: 'Features',
          url: '#features'
        },
        {
          title: 'Workflow',
          url: '#workflow'
        },
        {
          title: 'About',
          url: '#about'
        }
      ]
    },
    buttons: [
      {
        title: 'Try Demo',
        url: '/demo'
      }
    ]
  },
  hero: {
    title: 'Transforming News Content, Tailored just for you with AI',
    description:
      'Empower your content strategy with AI - Summarize, generate, and transform daily news into engaging formats, ready to share across platforms.',
    image: {
      src: '/imgs/image.png'
    },
    image_position: 'right',
    text_align: 'left',
    buttons: [
      {
        title: 'Explore Challenge',
        url: '#challenge'
      },
      {
        title: 'Try the AI Agent',
        url: '/demo'
      }
    ],
    show_happy_users: true,
    show_proof: true
  },
  section: {

    items: [
      {
        // name: "challenge",
        title: "Input Your News Idea",
        description:
          'Start by providing a simple prompt. Tell PostGen.ai the news you want to create or summarize, and our AI will instantly process it to generate your personalized content.',
        image: {
          src: '/images/step1.png'
        },
        image_position: 'left',
        text_align: 'center',
       
      },
      {
        title: 'Tailor Your Content',
        description:
          "Choose your preferred platform (LinkedIn, Instagram, Reddit, etc.), adjust the tone, and select the type of content you want – whether it's a text post, image, video, or meme. PostGen.ai makes it easy to adapt your content to any style.",
          image: {
            src: '/images/step2.png'
          },
          image_position: 'right',
          text_align: 'center',
      },  
      {
        name: 'workflow',
        title: ' Preview and Share Your Creation',
        description: 'View a live preview of your post and ensure it’s exactly what you want. Then, download or copy your content to share across your social media platforms, all within seconds.',
        image: {
          src: '/images/step3.png'
        },
        image_position: 'left',
        text_align: 'center',
   
      
      }
    ]
  },
  feature: {
    title: 'Features',
       items: [
      {
        title: 'AI-Powered Content Generation',
        description: 'Leverage the power of AI to quickly generate high-quality, engaging content from your prompts. PostGen.ai can summarize, rephrase, and create fresh content based on your input, helping you stay ahead of the content curve.',
    
      },
      {
        title: 'Multi-Format Content Creation',
        description: 'Create more than just text. PostGen.ai supports a variety of content formats, including images, videos, and memes, so you can engage your audience in diverse and creative ways, no matter the platform.',

      },
      {
        title: 'Platform Customization',
        description: 'Tailor your content for different social media platforms like LinkedIn, Facebook, Instagram, Reddit, and X. Whether you need professional tone or casual flair, PostGen.ai ensures your content fits perfectly for each platform.',
      
      },
      {
        title: 'Real-Time Content Preview',
        description: 'Preview how your content will look before you publish. PostGen.ai provides instant previews, giving you full control over how your posts will appear on social media, so you can make adjustments if needed.',
      
      }
    ]
  },
  cta: {
    title: 'Get Started with AI News Agent',
    description: 'Revolutionize how you create and share news content with our AI-powered tool.',
    buttons: [
      {
        title: 'Try Demo',
        url: '/chat'
      }
    ]
  },

  faq: {
    title: 'FAQs About AI News Agent',
    description: 'Your questions answered about our innovative AI tool.',
    items: [
      {
        title: 'What is PostGen.ai?',
        description: 'PostGen.ai is an AI-powered platform that helps you generate customized content from news articles or prompts. It supports various formats like text, images, videos, and memes, which can be tailored for platforms such as LinkedIn, Instagram, Facebook, Reddit, and X. The tool also allows you to adjust the tone and type of content for a more personalized output.'
      },
      {
        title: 'How does PostGen.ai work?',
        description: 'Simply enter a prompt or a news idea into PostGen.ai. The AI will process it and generate content in your preferred format. You can customize the content further by selecting the platform, tone, and content type. Once ready, you can preview and download the content to share on your social media channels.'
      },
      {
        title: 'Can I use PostGen.ai for free?',
        description: 'Yes! PostGen.ai offers a free version with core features, allowing you to create and customize your posts. For additional advanced features and more customization options, you can explore our premium offerings.'
      },
      {
        title: 'Which platforms can I customize my content for?',
        description: 'You can customize your content for popular platforms such as LinkedIn, Facebook, Instagram, Reddit, and X (formerly Twitter).'
      },  {
        title: 'What types of content can I generate on PostGen.ai?',
        description: 'PostGen.ai lets you create various content types, including text posts, images, videos, and memes, giving you the flexibility to engage your audience in different ways.'
      }
    ]
  },
  footer: {
    brand: {
    
      title: 'Postgen.ai',
      description:
        'PostGen.ai is an AI-powered content generation platform designed to simplify the process of creating engaging social media posts from news and prompts.',
      avatar: {
        src: '/imgs/ai-logo.png',
        title: 'AI News Agent'
      },
      url: '/'
    },
    badge_disabled: true,
    copyright: '© 2024 PostGen.ai. All rights reserved. Made with  `<div class="heart"></div>` by Team Zignutsian',
    social: {
      items: [
        {
          title: 'Twitter',
          url: 'https://twitter.com/ainewsagent',
          target: '_blank'
        },
        {
          title: 'LinkedIn',
          url: 'https://linkedin.com/company/ainewsagent',
          target: '_blank'
        },
        {
          title: 'Email',
          url: 'mailto:support@ainewsagent.com',
          target: '_self'
        }
      ]
    }
  }
}
