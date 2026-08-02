import { personal } from '@/constants/data';

const GITHUB_USER = personal.githubUser;
const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubProfile() {
  try {
    const res = await fetch(`${GITHUB_API}/users/${GITHUB_USER}`);
    if (!res.ok) throw new Error('GitHub fetch failed');
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos() {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USER}/repos?sort=updated&per_page=6`
    );
    if (!res.ok) throw new Error('Repos fetch failed');
    return await res.json();
  } catch {
    return [];
  }
}

export async function fetchGitHubStats() {
  const [profile, repos] = await Promise.all([
    fetchGitHubProfile(),
    fetchGitHubRepos(),
  ]);
  if (!profile) return null;

  const totalStars = Array.isArray(repos)
    ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
    : 0;

  return {
    username: profile.login,
    name: profile.name,
    avatar: profile.avatar_url,
    bio: profile.bio,
    followers: profile.followers,
    following: profile.following,
    publicRepos: profile.public_repos,
    totalStars,
    repos: (repos || []).map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      stars: r.stargazers_count,
      forks: r.forks_count,
      language: r.language,
      updated: r.updated_at,
    })),
  };
}
