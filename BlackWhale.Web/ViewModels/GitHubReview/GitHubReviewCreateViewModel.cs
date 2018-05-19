namespace BlackWhale.Web.ViewModels.GitHubReview
{
    using Commons.Mapper;
    using Core.DTO.GitHubReview;

    public class GitHubReviewCreateViewModel : IMapTo<CreateGitHubReviewDTO>
    {
        public string IdeaInShort { get; set; }
    }
}