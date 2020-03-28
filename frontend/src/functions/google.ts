let map
let service

declare let google: any

export function initialize () {
  const brussels = new google.maps.LatLng(50.85045, 4.34878)

  map = new google.maps.Map(document.getElementById('map'), {
    center: brussels,
    zoom: 15
  })

  const request: any = {
    location: brussels,
    radius: '500',
    type: ['supermarket']
  }

  service = new google.maps.places.PlacesService(map)
  service.nearbySearch(request, callback)
}

function grabPhotoUrl (photos: any) {
  if (photos && photos.length > 0) {
    return photos[0].getUrl()
  } else return ''
}

export function callback (results: any, status: any) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      console.log(results[i])
      const { name, place_id, photos, ...rest } = results[i]
      const subsetObj = {
        name, place_id, photo_url: grabPhotoUrl(photos)
      }
      console.log(subsetObj)
    }
    console.log(results[0])
  }
}
