import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Slider() { 


    return (
        <Swiper
          spaceBetween={8}
          slidesPerView={1.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
    <SwiperSlide>
        <div className="info__presentation">
            <div className="info__presentation--leftBlock">
                <h5>Презентация Smart Club</h5>
                <span>Скачать</span>
            </div>
            <div className="info__svg">
                <svg width="52.000000" height="49.000000" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M50.79 5.08C50.79 5.26 50.78 5.43 50.76 5.6C50.63 7.13 49.9 8.54 48.73 9.54C47.57 10.54 46.05 11.05 44.52 10.95C42.99 10.84 41.56 10.15 40.53 9C39.51 7.86 38.97 6.36 39.04 4.82C39.11 3.29 39.77 1.84 40.89 0.79C42.02 -0.26 43.5 -0.83 45.04 -0.79C46.58 -0.76 48.04 -0.12 49.11 0.97C50.18 2.07 50.79 3.55 50.79 5.08Z" fill="#FFD0A4" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M45.65 5.53C45.27 5.83 44.74 6.42 44.9 7.72C44.72 8.23 44.09 9.2 44.09 9.66C44.09 10.13 43.33 10.21 43.25 10.08C43.16 9.96 43.12 8.36 42.66 8.06C42.2 7.77 42.28 6.42 42.28 6.42C42.28 6.42 42.45 5.91 41.9 5.58C41.35 5.24 40.97 4.44 41.46 3.97C41.94 3.51 40.64 3.22 40.47 2.88C40.4 2.74 40.12 2.42 39.83 2.1C40.46 1.03 41.41 0.19 42.55 -0.31C42.98 0.14 43.35 0.72 43.25 1.32C43.27 1.62 44.55 2.08 43.92 2.71C43.29 3.34 42.44 4.23 43.92 4.52C45.4 4.82 46.03 5.24 45.65 5.53Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M49.02 0.88C48.7 1.54 47.91 2.08 47.46 2.08C46.96 1.53 45.86 2.29 45.76 1.41C45.7 0.89 46.29 0.09 46.79 -0.49C47.62 -0.21 48.39 0.26 49.02 0.88Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M50.76 5.6C50.64 7.05 49.97 8.41 48.9 9.4C48.71 9.21 48.54 8.99 48.6 8.82C48.73 8.44 49.24 7.64 49.15 7.13C49.07 6.66 49.5 5.24 50.76 5.6Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M41.2 34.8C41.01 35.96 40.7 37.1 40.27 38.2C37.47 45.36 29.96 49.85 22.06 48.56C17.7 47.85 13.8 45.43 11.22 41.85C8.64 38.26 7.59 33.79 8.3 29.43C8.34 29.21 8.38 28.99 8.42 28.77C10.2 20.05 18.57 14.22 27.43 15.67C30.08 16.1 32.58 17.16 34.72 18.77C35.43 19.29 36.09 19.87 36.7 20.51C38.52 22.37 39.87 24.64 40.65 27.12C41.43 29.6 41.62 32.23 41.2 34.8L41.2 34.8Z" fill="#FFB877" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M40.27 38.2C37.09 40.24 33.34 42.13 29.21 43.69C25.01 45.28 20.87 46.36 17.09 46.92C8.19 48.25 1.2 46.76 -0.37 42.6C-1.85 38.71 1.78 33.44 8.42 28.77C8.38 28.99 8.34 29.21 8.3 29.43C8.17 30.24 8.1 31.06 8.08 31.88C4.26 34.84 2.26 37.73 3.05 39.81C3.81 41.83 7.06 42.68 11.67 42.44C16.18 42.2 21.99 40.91 28.08 38.6C33.35 36.61 37.97 34.19 41.41 31.75C46.01 28.5 48.51 25.22 47.65 22.94C46.76 20.59 42.53 19.81 36.7 20.51C36.09 19.87 35.43 19.29 34.72 18.77C42.89 17.82 49.18 19.36 50.67 23.29C52.26 27.48 47.92 33.28 40.27 38.2Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="info__presentation">
            <div className="info__presentation--leftBlock">
                <h5>Презентация Smart Club</h5>
                <span>Скачать</span>
            </div>
            <div className="info__svg">
                <svg width="52.000000" height="49.000000" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M50.79 5.08C50.79 5.26 50.78 5.43 50.76 5.6C50.63 7.13 49.9 8.54 48.73 9.54C47.57 10.54 46.05 11.05 44.52 10.95C42.99 10.84 41.56 10.15 40.53 9C39.51 7.86 38.97 6.36 39.04 4.82C39.11 3.29 39.77 1.84 40.89 0.79C42.02 -0.26 43.5 -0.83 45.04 -0.79C46.58 -0.76 48.04 -0.12 49.11 0.97C50.18 2.07 50.79 3.55 50.79 5.08Z" fill="#FFD0A4" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M45.65 5.53C45.27 5.83 44.74 6.42 44.9 7.72C44.72 8.23 44.09 9.2 44.09 9.66C44.09 10.13 43.33 10.21 43.25 10.08C43.16 9.96 43.12 8.36 42.66 8.06C42.2 7.77 42.28 6.42 42.28 6.42C42.28 6.42 42.45 5.91 41.9 5.58C41.35 5.24 40.97 4.44 41.46 3.97C41.94 3.51 40.64 3.22 40.47 2.88C40.4 2.74 40.12 2.42 39.83 2.1C40.46 1.03 41.41 0.19 42.55 -0.31C42.98 0.14 43.35 0.72 43.25 1.32C43.27 1.62 44.55 2.08 43.92 2.71C43.29 3.34 42.44 4.23 43.92 4.52C45.4 4.82 46.03 5.24 45.65 5.53Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M49.02 0.88C48.7 1.54 47.91 2.08 47.46 2.08C46.96 1.53 45.86 2.29 45.76 1.41C45.7 0.89 46.29 0.09 46.79 -0.49C47.62 -0.21 48.39 0.26 49.02 0.88Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M50.76 5.6C50.64 7.05 49.97 8.41 48.9 9.4C48.71 9.21 48.54 8.99 48.6 8.82C48.73 8.44 49.24 7.64 49.15 7.13C49.07 6.66 49.5 5.24 50.76 5.6Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M41.2 34.8C41.01 35.96 40.7 37.1 40.27 38.2C37.47 45.36 29.96 49.85 22.06 48.56C17.7 47.85 13.8 45.43 11.22 41.85C8.64 38.26 7.59 33.79 8.3 29.43C8.34 29.21 8.38 28.99 8.42 28.77C10.2 20.05 18.57 14.22 27.43 15.67C30.08 16.1 32.58 17.16 34.72 18.77C35.43 19.29 36.09 19.87 36.7 20.51C38.52 22.37 39.87 24.64 40.65 27.12C41.43 29.6 41.62 32.23 41.2 34.8L41.2 34.8Z" fill="#FFB877" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M40.27 38.2C37.09 40.24 33.34 42.13 29.21 43.69C25.01 45.28 20.87 46.36 17.09 46.92C8.19 48.25 1.2 46.76 -0.37 42.6C-1.85 38.71 1.78 33.44 8.42 28.77C8.38 28.99 8.34 29.21 8.3 29.43C8.17 30.24 8.1 31.06 8.08 31.88C4.26 34.84 2.26 37.73 3.05 39.81C3.81 41.83 7.06 42.68 11.67 42.44C16.18 42.2 21.99 40.91 28.08 38.6C33.35 36.61 37.97 34.19 41.41 31.75C46.01 28.5 48.51 25.22 47.65 22.94C46.76 20.59 42.53 19.81 36.7 20.51C36.09 19.87 35.43 19.29 34.72 18.77C42.89 17.82 49.18 19.36 50.67 23.29C52.26 27.48 47.92 33.28 40.27 38.2Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="info__presentation">
            <div className="info__presentation--leftBlock">
                <h5>Презентация Smart Club</h5>
                <span>Скачать</span>
            </div>
            <div className="info__svg">
                <svg width="52.000000" height="49.000000" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M50.79 5.08C50.79 5.26 50.78 5.43 50.76 5.6C50.63 7.13 49.9 8.54 48.73 9.54C47.57 10.54 46.05 11.05 44.52 10.95C42.99 10.84 41.56 10.15 40.53 9C39.51 7.86 38.97 6.36 39.04 4.82C39.11 3.29 39.77 1.84 40.89 0.79C42.02 -0.26 43.5 -0.83 45.04 -0.79C46.58 -0.76 48.04 -0.12 49.11 0.97C50.18 2.07 50.79 3.55 50.79 5.08Z" fill="#FFD0A4" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M45.65 5.53C45.27 5.83 44.74 6.42 44.9 7.72C44.72 8.23 44.09 9.2 44.09 9.66C44.09 10.13 43.33 10.21 43.25 10.08C43.16 9.96 43.12 8.36 42.66 8.06C42.2 7.77 42.28 6.42 42.28 6.42C42.28 6.42 42.45 5.91 41.9 5.58C41.35 5.24 40.97 4.44 41.46 3.97C41.94 3.51 40.64 3.22 40.47 2.88C40.4 2.74 40.12 2.42 39.83 2.1C40.46 1.03 41.41 0.19 42.55 -0.31C42.98 0.14 43.35 0.72 43.25 1.32C43.27 1.62 44.55 2.08 43.92 2.71C43.29 3.34 42.44 4.23 43.92 4.52C45.4 4.82 46.03 5.24 45.65 5.53Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M49.02 0.88C48.7 1.54 47.91 2.08 47.46 2.08C46.96 1.53 45.86 2.29 45.76 1.41C45.7 0.89 46.29 0.09 46.79 -0.49C47.62 -0.21 48.39 0.26 49.02 0.88Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M50.76 5.6C50.64 7.05 49.97 8.41 48.9 9.4C48.71 9.21 48.54 8.99 48.6 8.82C48.73 8.44 49.24 7.64 49.15 7.13C49.07 6.66 49.5 5.24 50.76 5.6Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M41.2 34.8C41.01 35.96 40.7 37.1 40.27 38.2C37.47 45.36 29.96 49.85 22.06 48.56C17.7 47.85 13.8 45.43 11.22 41.85C8.64 38.26 7.59 33.79 8.3 29.43C8.34 29.21 8.38 28.99 8.42 28.77C10.2 20.05 18.57 14.22 27.43 15.67C30.08 16.1 32.58 17.16 34.72 18.77C35.43 19.29 36.09 19.87 36.7 20.51C38.52 22.37 39.87 24.64 40.65 27.12C41.43 29.6 41.62 32.23 41.2 34.8L41.2 34.8Z" fill="#FFB877" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M40.27 38.2C37.09 40.24 33.34 42.13 29.21 43.69C25.01 45.28 20.87 46.36 17.09 46.92C8.19 48.25 1.2 46.76 -0.37 42.6C-1.85 38.71 1.78 33.44 8.42 28.77C8.38 28.99 8.34 29.21 8.3 29.43C8.17 30.24 8.1 31.06 8.08 31.88C4.26 34.84 2.26 37.73 3.05 39.81C3.81 41.83 7.06 42.68 11.67 42.44C16.18 42.2 21.99 40.91 28.08 38.6C33.35 36.61 37.97 34.19 41.41 31.75C46.01 28.5 48.51 25.22 47.65 22.94C46.76 20.59 42.53 19.81 36.7 20.51C36.09 19.87 35.43 19.29 34.72 18.77C42.89 17.82 49.18 19.36 50.67 23.29C52.26 27.48 47.92 33.28 40.27 38.2Z" fill="#FB902E" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg>
            </div>
        </div>
    </SwiperSlide>
        </Swiper>
      );
}

