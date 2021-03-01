import request from '@/helpers/request';

const urls = {
  JSDELIVR: 'https://data.jsdelivr.com/v1/',
  NPMS: 'https://api.npms.io/v2/'
}

const endpoints = {
  package: `/package`,
  popular: '/stats/packages/month'
};

async function getPopularPackages() {
  return request({
    baseURL: urls.JSDELIVR,
    url: `${endpoints.popular}`
  })
}

async function searchPackages(query) {
  return request({
    baseURL: urls.NPMS,
    url: `search/suggestions?q=${query}`
  })
}

async function getPackageInfo(name) {
  return request({
    baseURL: urls.NPMS,
    url: `package/${name}`
  })
}

export { getPopularPackages, searchPackages, getPackageInfo }