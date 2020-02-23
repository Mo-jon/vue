/**
 * Class GetLocation 是一个定位服务
 * h5(): H5获取定位
 */

class GetLocation {
  constructor() {
    // 定位默认坐标
    this.defaultPosition = {
      lng: 110.05893, // 经度
      lat: 24.88188 // 纬度
    }
  }

  // H5获取定位
  async h5() {
    return new Promise((resolve, reject) => {
      try {
        console.log('[H5获取定位]');
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log(
              '[H5定位成功]',
              position.coords.longitude,
              position.coords.latitude
            );
            resolve({
              lng: position.coords.longitude,
              lat: position.coords.latitude
            });
          },
          (error) => {
            console.error('[H5定位失败]', error);
            reject('定位失败');
          }, {
            enableHighAcuracy: false,
            timeout: 6000,
            maximumAge: 2000
          }
        );
      } catch (error) {
        console.error('[H5定位失败]', error);
        reject('定位失败');
      }
    })
  }

  // 坐标转地址
  async getAddr(position = this.defaultPosition) {
    console.log("[GetLocation-getAddr]", position);
    return new Promise((resolve, reject) => {
      const T = window.T;
      new T.Geocoder().getLocation(T.LngLat(position.lng, position.lat), result => {
        if (result.getStatus() == 0) {
          const addr = result.getAddress();
          resolve({
            lat: position.lat,
            lng: position.lng,
            addr
          });
        } else {
          reject();
        }
      });
    })
  }
}

export default new GetLocation();