import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ImageCard from "../components/ImageCard";

export default function Home() {
	return (
		<Card className="container content-center shadow-xl">
			<CardHeader>
				<CardTitle className="text-center">
					Image Generator
				</CardTitle>
				<CardDescription className="text-center">Transform your ideas into visuals with our AI-powered image generator tool!</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="flex flex-row max-sm:flex-col space-y-1.5">
						<Input id="prompt" placeholder="type your prompt here..." />

						<Button variant="outline" className="bg-purple text-white ml-2 rounded-[50px]">Generate</Button>
					</div>
				</form>

				<div className="flex justify-center items-center object-contain mt-2">
					<Image
						src="/type.png"
						alt="prompt image"
						width={320}
						height={320}
						className="object-contain" />
				</div>

				<p className="text-center mt-4 text-muted-foreground">No result!</p>

				<div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 mt-3">
					<ImageCard />
				</div>
			</CardContent>
		</Card>
	);
}
