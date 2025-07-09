import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with Ryan's projects
const PROJECT_CONTENT = [
	{
		title: 'DecentraLearn',
		description:
			'Co-developed a decentralized e-learning platform on Internet Computer Protocol, implementing Rust canisters for course, module, and lesson management with on-chain progress tracking. Integrated Ollama LLM canister (Llama 3.1) and Qdrant VectorDB to power AI-driven course recommendations and in-app chatbot tutoring. Features modern React frontend with TypeScript, TailwindCSS, and secure authentication via ICP Internet Identity.',
		techStack: [
			'Rust',
			'Internet Computer Protocol',
			'Ollama',
			'Qdrant VectorDB',
			'React',
			'TypeScript',
			'TailwindCSS',
			'shadcn/ui',
			'Llama 3.1',
			'Recharts',
		],
		date: 'Mar 2025',
		links: [
			{
				name: 'ICP Hackathon',
				url: '#',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk',
			},
		],
		images: [
			{
				src: '/decentralearn1.png',
				alt: 'DecentraLearn landing page',
			},
			{
				src: '/decentralearn2.png',
				alt: 'DecentraLearn course interface',
			},
			{
				src: '/decentralearn3.png',
				alt: 'DecentraLearn AI chatbot',
			},
		],
	},
	{
		title: 'RoR - RewrittenOnRust',
		description:
			'Initiated and currently developing open-source project in Rust that applies popular LLMs stack, such as RAG using Qdrant as VectorDB and MCP. Using Ollama as backend endpoint for LLM model and Embedding model. A comprehensive Rust-based AI framework for building intelligent applications.',
		techStack: [
			'Rust',
			'Machine Learning',
			'Ollama',
			'Qdrant VectorDB',
			'RAG',
			'MCP',
			'Embedding Models',
		],
		date: 'Mar 2025 – Present',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/RoR',
			},
			{
				name: 'Documentation',
				url: '#',
			},
		],
		images: [
			{
				src: '/ror1.png',
				alt: 'RoR architecture diagram',
			},
			{
				src: '/ror2.png',
				alt: 'RoR CLI interface',
			},
		],
	},
	{
		title: 'ASVSim',
		description:
			'Forked and contributed to open-source ASV (Autonomous Surface Vehicle) robotic simulation. Currently developing autonomous system integration with ROS2 for realistic marine environment testing. Features Unity3D simulation environment with physics-based water dynamics and sensor modeling.',
		techStack: [
			'Python',
			'C++',
			'C#',
			'Unity3D',
			'ROS2',
			'Computer Vision',
			'Autonomous Systems',
		],
		date: 'Dec 2024 – Present',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/asvsim',
			},
			{
				name: 'Documentation',
				url: '#',
			},
		],
		images: [
			{
				src: '/asvsim1.png',
				alt: 'ASVSim Unity environment',
			},
			{
				src: '/asvsim2.png',
				alt: 'ASVSim ROS2 integration',
			},
			{
				src: '/asvsim3.png',
				alt: 'ASVSim autonomous navigation',
			},
		],
	},
	{
		title: 'YOLO.cpp',
		description:
			'Developed an open-source computer vision project implementing YOLO architecture from scratch. Started with C++ using only omp.h to maximize CPU performance, then extended to CUDA for GPU optimization. A deep dive into neural network implementation and hardware acceleration.',
		techStack: [
			'CUDA',
			'C',
			'C++',
			'Neural Networks',
			'OpenMP',
			'Computer Vision',
			'GPU Programming',
		],
		date: 'Jul 2024 – Dec 2024',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/yolo.cpp',
			},
			{
				name: 'Performance Benchmarks',
				url: '#',
			},
		],
		images: [
			{
				src: '/yolocpp1.png',
				alt: 'YOLO.cpp architecture',
			},
			{
				src: '/yolocpp2.png',
				alt: 'YOLO.cpp CUDA implementation',
			},
			{
				src: '/yolocpp3.png',
				alt: 'YOLO.cpp detection results',
			},
		],
	},
	{
		title: 'Amadeus',
		description:
			'Developed a personal AI assistant using Langchain that retains memory from previous conversations. Combined APIs from Groq for LLMs and Deepgram for text-to-speech functionality. Features natural conversation flow and persistent context management.',
		techStack: [
			'Python',
			'NLP',
			'Groq',
			'Llama 3.1',
			'Langchain',
			'Deepgram',
			'Text-to-Speech',
		],
		date: 'Jul 2024 – Present',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/amadeus',
			},
			{
				name: 'Demo Video',
				url: '#',
			},
		],
		images: [
			{
				src: '/amadeus1.png',
				alt: 'Amadeus chat interface',
			},
			{
				src: '/amadeus2.png',
				alt: 'Amadeus memory system',
			},
		],
	},
	{
		title: 'NASA Space Apps Challenge 2024',
		description:
			'Developed end-to-end predictive pipeline using NASA climate datasets (rainfall, soil moisture, solar radiation, temperature) and local market price data for fruits and vegetables. Engineered geospatial and temporal features; trained XGBoost regression models achieving competitive RMSE for environmental and price forecasts.',
		techStack: [
			'Python',
			'XGBoost',
			'Pandas',
			'Scikit-Learn',
			'Matplotlib',
			'Seaborn',
			'NASA APIs',
			'Geospatial Analysis',
		],
		date: 'Sep 2024',
		links: [
			{
				name: 'NASA Space Apps',
				url: '#',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/nasa-space-apps-2024',
			},
		],
		images: [
			{
				src: '/nasa1.png',
				alt: 'NASA project dashboard',
			},
			{
				src: '/nasa2.png',
				alt: 'Climate data visualization',
			},
			{
				src: '/nasa3.png',
				alt: 'Prediction results',
			},
		],
	},
	{
		title: 'Mitsuki Chatbot',
		description:
			'Trained Llama 2 with custom datasets to achieve desired personality for the chatbot and deployed with Streamlit. Created custom dataset for training and implemented GitHub OAuth to access user repository data. Features personalized responses and repository integration.',
		techStack: [
			'Python',
			'Streamlit',
			'Llama 2 70B',
			'NLP',
			'GitHub OAuth',
			'Custom Dataset',
			'Fine-tuning',
		],
		date: 'Jan 2024 – Feb 2024',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/mitsuki',
			},
			{
				name: 'Demo',
				url: '#',
			},
		],
		images: [
			{
				src: '/mitsuki1.png',
				alt: 'Mitsuki chatbot interface',
			},
			{
				src: '/mitsuki2.png',
				alt: 'Mitsuki personality training',
			},
		],
	},
	{
		title: 'Custom YOLOv4-Tiny Model',
		description:
			'Developed a customized YOLOv4-tiny model using custom datasets created with AyamBawang-dataset consisting of 300 labeled images. Trained for object detection with focus on food items, achieving high accuracy in real-world scenarios.',
		techStack: [
			'Computer Vision',
			'YOLOv4-tiny',
			'OpenLabelling',
			'Google Colab',
			'Custom Dataset',
			'Object Detection',
		],
		date: 'Jan 2024',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/yolov4-custom',
			},
			{
				name: 'Dataset',
				url: '#',
			},
		],
		images: [
			{
				src: '/yolov4-1.png',
				alt: 'YOLOv4 detection results',
			},
			{
				src: '/yolov4-2.png',
				alt: 'Training process',
			},
		],
	},
	{
		title: 'Emotion Detector',
		description:
			'Developed a customized machine learning model that recognizes human emotions, ranging from happiness to fear. Results of independent research conducted using computer vision techniques and facial expression analysis.',
		techStack: [
			'Computer Vision',
			'Machine Learning',
			'Google Colab',
			'OpenCV',
			'Facial Recognition',
			'Emotion Analysis',
		],
		date: 'Nov 2023',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/emotion-detector',
			},
			{
				name: 'Research Paper',
				url: '#',
			},
		],
		images: [
			{
				src: '/emotion1.png',
				alt: 'Emotion detection results',
			},
			{
				src: '/emotion2.png',
				alt: 'Model architecture',
			},
		],
	},
	{
		title: 'Digital Mouse with Hand Recognition',
		description:
			'Developed a machine learning model that recognizes hand gestures and converts them to digital mouse actions. Features pinching for left click and other gesture-based controls. Results of independent research in computer vision and HCI.',
		techStack: [
			'Computer Vision',
			'Machine Learning',
			'Google Colab',
			'Hand Tracking',
			'Gesture Recognition',
			'HCI',
		],
		date: 'Oct 2023',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/coolcmyk/digital-mouse',
			},
			{
				name: 'Demo Video',
				url: '#',
			},
		],
		images: [
			{
				src: '/mouse1.png',
				alt: 'Hand gesture recognition',
			},
			{
				src: '/mouse2.png',
				alt: 'Digital mouse interface',
			},
		],
	},
];

// Define interface for project prop
interface ProjectProps {
	title: string;
	description?: string;
	techStack?: string[];
	date?: string;
	links?: { name: string; url: string }[];
	images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
	// Find the matching project data
	const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

	if (!projectData) {
		return <div>Project details not available</div>;
	}

	return (
		<div className="space-y-10">
			{/* Header section with description */}
			<div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
				<div className="space-y-6">
					<div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
						<span>{projectData.date}</span>
					</div>

					<p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
						{projectData.description}
					</p>

					{/* Tech stack */}
					<div className="pt-4">
						<h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
							Technologies
						</h3>
						<div className="flex flex-wrap gap-2">
							{projectData.techStack.map((tech, index) => (
								<span
									key={index}
									className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Links section */}
			{projectData.links && projectData.links.length > 0 && (
				<div className="mb-24">
					<div className="px-6 mb-4 flex items-center gap-2">
						<h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
							Links
						</h3>
						<Link className="text-muted-foreground w-4" />
					</div>
					<Separator className="my-4" />
					<div className="space-y-3">
						{projectData.links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
							>
								<span className="font-light capitalize">{link.name}</span>
								<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</a>
						))}
					</div>
				</div>
			)}

			{/* Images gallery */}
			{projectData.images && projectData.images.length > 0 && (
				<div className="space-y-6">
					<div className="grid grid-cols-1 gap-4">
						{projectData.images.map((image, index) => (
							<div
								key={index}
								className="relative aspect-video overflow-hidden rounded-2xl"
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className="object-cover transition-transform"
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

// Main data export with updated content
export const data = [
	{
		category: 'Hackathon Winner',
		title: 'DecentraLearn',
		src: '/decentralearn-preview.png',
		content: <ProjectContent project={{ title: 'DecentraLearn' }} />,
	},
	{
		category: 'Open Source',
		title: 'RoR - RewrittenOnRust',
		src: '/ror-preview.png',
		content: <ProjectContent project={{ title: 'RoR - RewrittenOnRust' }} />,
	},
	{
		category: 'Robotics',
		title: 'ASVSim',
		src: '/asvsim-preview.png',
		content: <ProjectContent project={{ title: 'ASVSim' }} />,
	},
	{
		category: 'Computer Vision',
		title: 'YOLO.cpp',
		src: '/yolocpp-preview.png',
		content: <ProjectContent project={{ title: 'YOLO.cpp' }} />,
	},
	{
		category: 'AI Assistant',
		title: 'Amadeus',
		src: '/amadeus-preview.png',
		content: <ProjectContent project={{ title: 'Amadeus' }} />,
	},
	{
		category: 'Hackathon',
		title: 'NASA Space Apps Challenge 2024',
		src: '/nasa-preview.png',
		content: (
			<ProjectContent project={{ title: 'NASA Space Apps Challenge 2024' }} />
		),
	},
	{
		category: 'NLP',
		title: 'Mitsuki Chatbot',
		src: '/mitsuki-preview.png',
		content: <ProjectContent project={{ title: 'Mitsuki Chatbot' }} />,
	},
	{
		category: 'Computer Vision',
		title: 'Custom YOLOv4-Tiny Model',
		src: '/yolov4-preview.png',
		content: <ProjectContent project={{ title: 'Custom YOLOv4-Tiny Model' }} />,
	},
	{
		category: 'Machine Learning',
		title: 'Emotion Detector',
		src: '/emotion-preview.png',
		content: <ProjectContent project={{ title: 'Emotion Detector' }} />,
	},
	{
		category: 'Computer Vision',
		title: 'Digital Mouse with Hand Recognition',
		src: '/mouse-preview.png',
		content: (
			<ProjectContent project={{ title: 'Digital Mouse with Hand Recognition' }} />
		),
	},
];
