import { Rating } from './Rating';

export const DriverCard = ({ name, rating, img, car }) => {
  return (
    <>
      <div class="card m-5 border-rounded mw-50 bg-card ">
        <div class="car-driver-flex">
          <div>
            <img class="img-rounded w-120" src={`${img}`} alt="driver" />
          </div>
          <div class="left ml-10">
            <h1 class="card-header text-white fs-20 pt-25">{name}</h1>
            <Rating class="text-white pb-5 ">{rating}</Rating>
            <h5 class="text-white pb-5 fs-20">
              {car.model} - {car.licensePlate}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
