"use client"
import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Volume2, VolumeX, Play, Pause } from 'lucide-react'
import Link from 'next/link'

const videos = [
	{
		id: 1,
		title: 'Auto Artist Defender',
		src: '/follow-us/Auto-Artist-Defender-after-video.mp4',
		thumbnail: '/follow-us/thumbnails/Auto-Artist-Defender.png',
		type: 'video/mp4',
	},
	{
		id: 2,
		title: 'Auto Artist Elevate',
		src: '/follow-us/AUTO-ARTIST-ELEVATE.mp4',
		thumbnail: '/follow-us/thumbnails/Auto-Artist-Elevate.png',
		type: 'video/mp4',
	},
	{
		id: 3,
		title: 'Auto Artist BMW',
		src: '/follow-us/Auto-Artist-BMW.mp4',
		thumbnail: '/follow-us/thumbnails/Auto-Artist-BMW.png',
		type: 'video/mp4',
	},
	{
		id: 4,
		title: 'Auto Artist THAR ROXX',
		src: '/follow-us/Auto-Artist-THAR-ROXX.mp4',
		thumbnail: '/follow-us/thumbnails/Auto-Artist-Thar-roxx.png',
		type: 'video/mp4',
	},
]

export default function FollowUs() {
	const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
	const [playing, setPlaying] = useState<number | null>(null)
	const [loadingStates, setLoadingStates] = useState<boolean[]>(
		Array(videos.length).fill(false)
	)
	const [errorStates, setErrorStates] = useState<boolean[]>(
		Array(videos.length).fill(false)
	)
	const [mutedStates, setMutedStates] = useState<boolean[]>(
		Array(videos.length).fill(true)
	)

	function getVideoErrorMessage(error: MediaError | null | undefined) {
		if (!error) return 'Unknown error.'
		switch (error.code) {
			case 1:
				return 'Aborted: The fetching process for the media resource was aborted by the user agent at the user’s request.'
			case 2:
				return 'Network error: A network error caused the video download to fail.'
			case 3:
				return 'Decode error: The video playback was aborted due to a corruption problem or because the video used features your browser did not support.'
			case 4:
				return 'Source not supported: The video could not be loaded, either because the server or network failed or because the format is not supported.'
			default:
				return 'An unknown error occurred.'
		}
	}

	const handleError = (index: number, error: any) => {
		console.error('Video error details:', {
			index,
			videoSrc: videos[index].src,
			error:
				error instanceof Event
					? {
							type: error.type,
							target: error.target
								? {
										error: (error.target as HTMLVideoElement).error,
										src: (error.target as HTMLVideoElement).src,
										networkState: (error.target as HTMLVideoElement).networkState,
										readyState: (error.target as HTMLVideoElement).readyState,
								  }
								: null,
					  }
					: error,
		})

		setErrorStates((prev) => {
			const newStates = [...prev]
			newStates[index] = true
			return newStates
		})
		setLoadingStates((prev) => {
			const newStates = [...prev]
			newStates[index] = false
			return newStates
		})
	}

	const toggleMute = (index: number, e: React.MouseEvent) => {
		e.stopPropagation()
		const video = videoRefs.current[index]
		if (video) {
			video.muted = !video.muted
			setMutedStates((prev) => {
				const newStates = [...prev]
				newStates[index] = video.muted
				return newStates
			})
		}
	}

	const handleVideoClick = async (index: number) => {
		const video = videoRefs.current[index]
		if (!video) return

		try {
			// Reset error state for this video
			setErrorStates((prev) => {
				const newStates = [...prev]
				newStates[index] = false
				return newStates
			})

			// If the same video is clicked while playing, pause it
			if (playing === index) {
				video.pause()
				setPlaying(null)
				return
			}

			// Show loading state for clicked video
			setLoadingStates((prev) => {
				const newStates = [...prev]
				newStates[index] = true
				return newStates
			})

			// Pause any currently playing video
			if (playing !== null && videoRefs.current[playing]) {
				const currentVideo = videoRefs.current[playing]
				currentVideo.pause()
				setPlaying(null)
			}

			// Reset the video if it ended
			if (video.ended) {
				video.currentTime = 0
			}

			const playVideo = async () => {
				try {
					await video.play()
					setPlaying(index)
				} catch (playError: any) {
					console.error('Play error details:', {
						index,
						videoSrc: videos[index].src,
						error: playError?.message || playError,
					})
					handleError(index, playError)
					throw playError
				}
			}

			// Handle video loading and playing
			if (video.readyState >= 4) {
				await playVideo()
			} else {
				try {
					// Create a new promise that resolves when the video can play through
					await new Promise((resolve, reject) => {
						const timeoutId = setTimeout(() => {
							reject(new Error('Video load timeout after 10 seconds'))
						}, 10000)

						const cleanup = () => {
							video.removeEventListener('canplaythrough', handleCanPlayThrough)
							video.removeEventListener('error', handleVideoError)
							clearTimeout(timeoutId)
						}

						const handleCanPlayThrough = () => {
							cleanup()
							resolve(true)
						}

						const handleVideoError = (e: Event) => {
							cleanup()
							reject(e)
						}

						video.addEventListener('canplaythrough', handleCanPlayThrough, {
							once: true,
						})
						video.addEventListener('error', handleVideoError, { once: true })

						// Force reload the video
						video.load()
					})

					await playVideo()
				} catch (error) {
					handleError(index, error)
				}
			}
		} catch (error) {
			handleError(index, error)
		} finally {
			setLoadingStates((prev) => {
				const newStates = [...prev]
				newStates[index] = false
				return newStates
			})
		}
	}

	return (
		<div className="bg-black text-white py-8 md:py-16">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16 uppercase"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<span className="text-white">Follow </span>Us
				</motion.h2>

				<div className="flex justify-center items-center mb-12">
					<Link
						href="https://www.instagram.com/auto_artist_7/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
					>
						<Instagram className="w-5 h-5" />
						<span>Follow us on Instagram</span>
					</Link>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
					{videos.map((video, index) => (
						<div
							key={index}
							className="relative aspect-[9/16] cursor-pointer group bg-gray-900 border-2 border-[#3af7f8] rounded-lg overflow-hidden"
						>
							<video
								ref={(el) => {
									videoRefs.current[index] = el
								}}
								className="w-full h-full object-cover"
								playsInline
								preload="metadata"
								poster={video.thumbnail}
								loop
								src={video.src}
								onLoadStart={() => {
									setLoadingStates((prev) => {
										const newStates = [...prev]
										newStates[index] = true
										return newStates
									})
								}}
								onLoadedData={() => {
									setLoadingStates((prev) => {
										const newStates = [...prev]
										newStates[index] = false
										return newStates
									})
								}}
								onError={(e) => {
									const videoEl = e.currentTarget as HTMLVideoElement
									const mediaError = videoEl.error
									const errorMsg = getVideoErrorMessage(mediaError)
									console.error('Video error details:', {
										index,
										src: video.src,
										errorCode: mediaError?.code,
										errorMessage: errorMsg,
										networkState: videoEl.networkState,
										readyState: videoEl.readyState,
									})
									setErrorStates((prev) => {
										const newStates = [...prev]
										newStates[index] = true
										return newStates
									})
									setLoadingStates((prev) => {
										const newStates = [...prev]
										newStates[index] = false
										return newStates
									})
								}}
							/>

							{/* Loading overlay */}
							{loadingStates[index] && (
								<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
									<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
								</div>
							)}

							{/* Error overlay */}
							{errorStates[index] && (
								<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
									<div className="text-red-500 text-center p-4">
										<svg
											className="w-12 h-12 mx-auto mb-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p>{getVideoErrorMessage(videoRefs.current[index]?.error)}</p>
										<button
											className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
											onClick={(e) => {
												e.stopPropagation()
												const video = videoRefs.current[index]
												if (video) {
													video.load()
													setErrorStates((prev) => {
														const newStates = [...prev]
														newStates[index] = false
														return newStates
													})
												}
											}}
										>
											Retry
										</button>
									</div>
								</div>
							)}							{/* Custom video controls */}
							<div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-black/50 via-transparent to-black/70 group:opacity-20 group-hover:opacity-100 transition-opacity">
								{/* Top controls - title */}
								<div className="text-white text-sm font-medium px-2">{video.title}</div>

								{/* Center play/pause button */}
								<div className="absolute inset-0 flex items-center justify-center">
									<button
										onClick={() => handleVideoClick(index)}
										className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all transform hover:scale-110"
									>
										{playing === index ? (
											<Pause className="w-8 h-8 text-white" />
										) : (
											<Play className="w-8 h-8 text-white" />
										)}
									</button>
								</div>

								{/* Bottom controls - volume */}
								<div className="flex items-center justify-end">
									<button
										onClick={(e) => toggleMute(index, e)}
										className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
									>
										{mutedStates[index] ? (
											<VolumeX className="w-6 h-6 text-white" />
										) : (
											<Volume2 className="w-6 h-6 text-white" />
										)}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
