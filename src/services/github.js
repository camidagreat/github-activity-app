import axios from 'axios'

const getApiUrlfromRepoUrl = (url) => {
  const parsedUrl = url.split('.com/')
  const urlParams = parsedUrl[1]
  const parsedUrlParams = urlParams.split('/')
  const owner = parsedUrlParams[0]
  const repo = parsedUrlParams[1]
  return `https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`
}

export const fetchGithubActivity = async (url) => {
  const apiUrl = getApiUrlfromRepoUrl(url)
  try {
    const res = await axios.get(apiUrl)
    return res.data
  } catch {
    alert('There was no repo found at that URL')
  }
}