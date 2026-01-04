# 🎨 StyleAI - AI-Powered Outfit Recommender

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://ai-powered-style-recommendations-8w7iy4rd0.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An intelligent outfit recommendation system powered by **Google Gemini AI** and **Stable Diffusion** that helps you discover your perfect style with both **AI-generated descriptions** and **visual outfit images** in seconds.

**🌐 [Try It Live!](https://ai-powered-style-recommendations-8w7iy4rd0.vercel.app)**

![StyleAI Banner](https://via.placeholder.com/1200x400/8B5CF6/FFFFFF?text=StyleAI+-+AI+Outfit+Recommender)

## ✨ Features

- 🤖 **Dual AI-Powered Generation** - Get personalized outfit suggestions using Google Gemini 2.5 Flash + AI-generated outfit images via Stable Diffusion
- 🖼️ **AI Image Generation** - Visualize your perfect outfit with AI-generated fashion images
- 📸 **Photo Upload** - Upload your photo with drag-and-drop support
- 🎨 **Style Selection** - Choose from 6 different style categories (Casual, Formal, Streetwear, Bohemian, Athletic, Elegant)
- 🌈 **Color Palette** - Select up to 3 colors for your perfect outfit
- 💾 **Download & Share** - Save your outfit recommendations and images
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Real-time Generation** - Get instant AI-powered fashion advice with visual previews
- 🎯 **Interactive UI** - Smooth animations and intuitive 4-step design

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **AI Models:** 
  - Google Gemini 2.5 Flash (Text Generation)
  - Stable Diffusion XL (Image Generation)
- **AI SDK:** Vercel AI SDK (@ai-sdk/google)
- **Image Generation:** Hugging Face Inference API
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/midhat81/AI-powered-style-recommendations.git
cd AI-powered-style-recommendations
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
HUGGINGFACE_API_KEY=your_huggingface_token_here
```
   
   **Get your API keys:**
   - **Google Gemini:** [Google AI Studio](https://aistudio.google.com/app/apikey)
   - **Hugging Face:** [Hugging Face Settings](https://huggingface.co/settings/tokens)
     - Create a token with "Inference" permission enabled

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 🎯 How It Works

1. **Upload Your Photo** - Drag and drop or select an image
2. **Choose Your Style** - Select from Casual, Formal, Streetwear, Bohemian, Athletic, or Elegant
3. **Pick Your Colors** - Choose 1-3 colors for your outfit palette
4. **Generate Outfit** - AI creates:
   - ✨ **Detailed text description** with styling tips
   - 🖼️ **AI-generated outfit image** visualizing your perfect look
5. **Download & Share** - Save both text and image!

## 📁 Project Structure
```
ai-powered-style-recommendations/
├── app/
│   ├── api/
│   │   └── outfit/
│   │       └── generate/          # AI generation endpoint (text + image)
│   ├── recommend/
│   │   └── _components/           # Upload, style, color, preview components
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/                    # Reusable UI components
│   └── motion/                    # Animation components
├── lib/
│   ├── ai/                        # Gemini AI & Image generation config
│   ├── utils/                     # Helper functions
│   └── validators/                # Input validation
├── types/                         # TypeScript definitions
└── public/                        # Static assets
```

## 🎨 Key Features Explained

### Dual AI Generation System
The app uses **two powerful AI models**:

1. **Google Gemini 2.5 Flash** - Generates detailed outfit recommendations including:
   - Complete outfit description
   - Styling tips
   - Color coordination advice
   - Occasion-appropriate suggestions
   - Alternative options

2. **Stable Diffusion XL** (via Hugging Face) - Creates visual representations:
   - High-quality fashion photography style images
   - Based on your selected style and colors
   - Professional studio lighting aesthetic
   - Clean, detailed clothing visualization

### Multi-Step Form
Intuitive 4-step process with:
- Progress indicator
- Form validation
- Smooth transitions
- Back/Next navigation

### File Upload
Advanced upload system with:
- Drag and drop support
- Image preview
- File type validation (JPG, PNG, WEBP)
- Size validation (max 5MB)
- Error handling

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `GOOGLE_GENERATIVE_AI_API_KEY`
   - `HUGGINGFACE_API_KEY`
5. Deploy! 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/midhat81/AI-powered-style-recommendations)

## 📝 Environment Variables

| Variable | Description | Required | Get It From |
|----------|-------------|----------|-------------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Your Google Gemini API key for text generation | Yes | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| `HUGGINGFACE_API_KEY` | Your Hugging Face token for image generation | Yes | [Hugging Face](https://huggingface.co/settings/tokens) |

## 🎬 Live Demo

**🌐 Live App:** [https://ai-powered-style-recommendations-8w7iy4rd0.vercel.app](https://ai-powered-style-recommendations-8w7iy4rd0.vercel.app)

Try it now and generate your perfect AI-powered outfit with visual recommendations!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for powering the text recommendations
- **Hugging Face** for providing free image generation API
- **Stability AI** for the Stable Diffusion XL model
- **Vercel** for the AI SDK and hosting platform
- **Next.js** team for the amazing framework

## 🐛 Known Issues

- Image generation may take 10-30 seconds depending on API response time
- Free tier rate limits apply for Hugging Face API

## 🔮 Future Enhancements

- [ ] Add more style categories
- [ ] Multiple outfit image variations
- [ ] Save favorite outfits to user profile
- [ ] Social sharing with preview cards
- [ ] Integration with shopping platforms
- [ ] Virtual try-on features

## 📧 Contact

**Midhat** - [@midhat81](https://github.com/midhat81)

Project Link: [https://github.com/midhat81/AI-powered-style-recommendations](https://github.com/midhat81/AI-powered-style-recommendations)

---

⭐ **If you found this project helpful, please give it a star!**

Made with ❤️ and AI