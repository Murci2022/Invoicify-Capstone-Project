import Image from 'next/image';

import {imageLoader} from '../utils/ImageLoader';

function ImageHolder() {
	return (
		<div>
			<Image
				src="/my-Logo.png"
				alt="mobile view"
				width={300}
				height={70}
				objectFit="cover"
				loader={imageLoader}
			/>
		</div>
	);
}
export default ImageHolder;
