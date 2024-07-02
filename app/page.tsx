'use client';

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ImageCard from "../components/ImageCard";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Empty from "@/components/Empty";
import axios from "axios";

export default function Home() {

	const [images, setImages] = useState<string[]>([]);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: ""
		}
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {

		try {
			setImages([]);
			const response = await axios.post('/api/image', values);

			const urls = response.data.map((image: { url: string }) => image.url);

			setImages(urls);

		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Card className="container content-center shadow-xl">
			<CardHeader>
				<CardTitle className="text-center">
					Image Generator
				</CardTitle>
				<CardDescription className="text-center">Transform your ideas into visuals with our AI-powered image generator tool!</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}
						className=" rounded-lg border w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
					>
						<FormField
							name="prompt"
							render={({ field }) => (
								<FormItem className="col-span-12 lg:col-span-10">
									<FormControl className="m-0 p-0">
										<Input
											id="prompt"
											placeholder="A photograph of a white Siamese cat."
											className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
											disabled={isLoading}
											{...field}
										/>

									</FormControl>
								</FormItem>
							)}
						>
						</FormField>
						<Button
							variant="outline"
							className="col-span-12 lg:col-span-2  w-full bg-purple text-white ml-2 rounded-[50px]"
							disabled={isLoading}>
							Generate
						</Button>
					</form>
				</Form>

				{images.length === 0 && !isLoading && (
					<Empty />
				)}

				<div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 mt-3">
					{images.map((url) => (
						<ImageCard imageUrl={url} />
					))}
				</div>
			</CardContent>
		</Card>
	);
}
