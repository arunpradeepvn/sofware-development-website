import { Smartphone, Globe2, Server, Blocks, Layers3, ShoppingBag, Waypoints, Database, Wrench, Rocket, Lightbulb, Cloud, type LucideIcon } from 'lucide-react'

export type Service = { title: string; slug: string; description: string; detail: string; image: string; tech: string[]; icon: LucideIcon }
export const services: Service[] = [
  { title: 'Mobile app development', slug: 'mobile-app-development', image: '/services/mobile-app-development.svg', description: 'Thoughtful iOS and Android apps, built to feel right in every hand.', detail: 'From early product thinking to launch day, we create mobile experiences that are intuitive, dependable, and ready to grow. Choose native or a shared React Native codebase.', tech: ['React Native', 'Expo', 'iOS', 'Android'], icon: Smartphone },
  { title: 'Web development', slug: 'web-development', image: '/services/web-development.svg', description: 'Fast, accessible web experiences that make complex things feel simple.', detail: 'We build considered websites, web applications, customer portals, and admin dashboards with a focus on performance, accessibility, and maintainability.', tech: ['React', 'TypeScript', 'Tailwind CSS'], icon: Globe2 },
  { title: 'Backend development', slug: 'backend-development', image: '/services/backend-development.svg', description: 'Secure, scalable foundations for products and business-critical systems.', detail: 'Robust APIs and backend systems that keep your product reliable as usage and complexity increase. We design for clarity, security, and sensible operations.', tech: ['Node.js', 'Express', 'REST APIs'], icon: Server },
  { title: 'Custom software', slug: 'custom-software-development', image: '/services/custom-software-development.svg', description: 'Purpose-built systems that fit the way your business actually works.', detail: 'From CRM and ERP platforms to billing, inventory, and operations systems, we translate your workflows into software your team can rely on.', tech: ['React', 'Node.js', 'PostgreSQL'], icon: Blocks },
  { title: 'White-label apps', slug: 'white-label-app-development', image: '/services/white-label-app-development.svg', description: 'One strong product foundation, shaped for multiple brands and audiences.', detail: 'Shared codebase architecture helps teams deliver a family of branded mobile apps consistently, with configuration and identity tailored to each partner.', tech: ['React Native', 'Firebase', 'CI/CD'], icon: Layers3 },
  { title: 'E-commerce', slug: 'ecommerce-development', image: '/services/ecommerce-development.svg', description: 'Smooth shopping journeys from first product view to completed order.', detail: 'We create connected commerce experiences with thoughtful catalogues, carts, payment flows, order management, and room for your business to scale.', tech: ['React', 'Node.js', 'Payment APIs'], icon: ShoppingBag },
  { title: 'API integration', slug: 'api-integration', image: '/services/api-integration.svg', description: 'Connect the services you use into one seamless product experience.', detail: 'We integrate payment providers, maps, identity, Firebase, and third-party services with dependable error handling and clear documentation.', tech: ['REST', 'OAuth', 'Firebase'], icon: Waypoints },
  { title: 'Database development', slug: 'database-development', image: '/services/database-development.svg', description: 'Well-modelled data systems designed for performance and confidence.', detail: 'From data modelling and schema design to migration and optimization, we help keep your application data useful, consistent, and secure.', tech: ['PostgreSQL', 'MySQL', 'Firebase'], icon: Database },
  { title: 'Application maintenance', slug: 'application-maintenance', image: '/services/application-maintenance.svg', description: 'Keep your product healthy, current, and moving forward.', detail: 'We support existing applications with bug fixes, performance tuning, production support, dependency upgrades, and React Native version migrations.', tech: ['Monitoring', 'React Native', 'CI/CD'], icon: Wrench },
  { title: 'App publishing & deployment', slug: 'app-publishing-deployment', image: '/services/app-publishing-deployment.svg', description: 'A careful path from release candidate to your customers’ hands.', detail: 'We prepare and publish apps on Google Play and the Apple App Store, coordinate release management, and make your deployment repeatable.', tech: ['App Store', 'Google Play', 'Release ops'], icon: Rocket },
  { title: 'MVP development', slug: 'mvp-development', image: '/services/mvp-development.svg', description: 'Test the heart of your idea with a focused, launch-ready first product.', detail: 'We help startups move from assumptions to a usable product through rapid prototyping, product decisions, and an intentionally scoped MVP.', tech: ['Product discovery', 'React', 'Node.js'], icon: Lightbulb },
  { title: 'SaaS development', slug: 'saas-development', image: '/services/saas-development.svg', description: 'Flexible subscription software built for lasting customer value.', detail: 'We design multi-tenant platforms and subscription products with the workflows, billing integrations, and foundations your service needs.', tech: ['React', 'Node.js', 'PostgreSQL'], icon: Cloud },
]

export const faqs = [
  ['What services does ARUN provide?', 'We design and develop mobile apps, websites, custom software, APIs, e-commerce experiences, SaaS platforms, and ongoing product support.'],
  ['Do you develop Android and iOS applications?', 'Yes. We build for both platforms, including cross-platform apps with React Native and Expo.'],
  ['Can you build both websites and mobile applications?', 'Yes. We can deliver a connected web and mobile product, with a shared plan for design, data, and APIs.'],
  ['Do you develop custom CRM and ERP software?', 'Yes. We shape custom CRM, ERP, billing, inventory, and operations tools around your business workflows.'],
  ['Can you build white-label applications?', 'Yes. We can create multiple branded apps from a shared codebase and configurable product foundation.'],
  ['Do you provide API integration?', 'Yes. We integrate payment gateways, maps, authentication, Firebase, and other third-party services.'],
  ['Do you work with startups?', 'Yes. We help founders clarify product scope, prototype ideas, and build focused MVPs.'],
  ['Can you maintain existing applications?', 'Yes. We can help with bug fixes, performance, upgrades, and production support.'],
  ['Do you provide app publishing services?', 'Yes. We can prepare releases and publish to both the Apple App Store and Google Play.'],
  ['How can I request a project quotation?', 'Send us a note using the inquiry form with a little about your goals. We’ll follow up to understand the scope and next steps.'],
]

export const technologies: Record<string, string[]> = {
  Frontend: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'], Database: ['PostgreSQL', 'MySQL', 'Firebase'],
  Mobile: ['React Native', 'Expo', 'Android', 'iOS'], 'Tools & integrations': ['Git', 'GitHub', 'Google Maps API', 'Payment APIs'],
}
