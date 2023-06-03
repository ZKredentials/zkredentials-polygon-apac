import { FC, memo, useState } from "react";
import {
  ProofSummaryCardContainer,
  ProofSummaryCardContent,
  ProofSummaryCardSection,
  ProofSummaryCardSeeMore,
  ProofSummaryCardText,
  ProofSummaryCardTextDetail,
} from "./style";

interface IVerifyProofDetails {
  prs?: string;
  prsThreshold?: number;
  prsProofDetails?: string;

  starred?: string;
  starredThreshold?: number;
  starredProofDetails?: string;

  sponsors?: string;
  sponsorsThreshold?: number;
  sponsorsProofDetails?: string;

  organizations?: string;
  organizationsThreshold?: number;
  organizationsProofDetails?: string;

  contributedRepos?: string;
  contributedReposThreshold?: number;
  contributedReposProofDetails?: string;
}

interface IProps {
  loading: boolean;
  data: IVerifyProofDetails;
}

const ProofSummaryCard: FC<IProps> = ({ loading, data }) => {
  const [viewMorePrs, setViewMorePrs] = useState<boolean>(false);
  const [viewMoreStarred, setViewMoreStarred] = useState<boolean>(false);
  const [viewMoreSponsors, setViewMoreSponsors] = useState<boolean>(false);
  const [viewMoreContributedRepos, setViewMoreContributedRepos] =
    useState<boolean>(false);
  const [viewMoreOrganizations, setViewMoreOrganizations] =
    useState<boolean>(false);

  return (
    <ProofSummaryCardContainer>
      {loading ? (
        <ProofSummaryCardContent>
          <ProofSummaryCardText>Loading...</ProofSummaryCardText>
        </ProofSummaryCardContent>
      ) : (
        <ProofSummaryCardContent>
          {data?.prs && (
            <ProofSummaryCardSection>
              <ProofSummaryCardText>
                You have at least {data?.prsThreshold} Pulled Requests
              </ProofSummaryCardText>
              {viewMorePrs ? (
                <ProofSummaryCardTextDetail
                  onClick={() => setViewMorePrs(false)}
                >
                  {data.prsProofDetails}
                </ProofSummaryCardTextDetail>
              ) : (
                <ProofSummaryCardSeeMore onClick={() => setViewMorePrs(true)}>
                  View Proof
                </ProofSummaryCardSeeMore>
              )}
            </ProofSummaryCardSection>
          )}

          {data?.contributedRepos && (
            <ProofSummaryCardSection>
              <ProofSummaryCardText>
                You have at least contributed {data?.contributedReposThreshold}{" "}
                to repositories
              </ProofSummaryCardText>
              {viewMoreContributedRepos ? (
                <ProofSummaryCardTextDetail
                  onClick={() => setViewMoreContributedRepos(false)}
                >
                  {data.contributedReposProofDetails}
                </ProofSummaryCardTextDetail>
              ) : (
                <ProofSummaryCardSeeMore
                  onClick={() => setViewMoreContributedRepos(true)}
                >
                  View Proof
                </ProofSummaryCardSeeMore>
              )}
            </ProofSummaryCardSection>
          )}

          {data?.starred && (
            <ProofSummaryCardSection>
              <ProofSummaryCardText>
                You have at least {data?.starredThreshold} Starred Repositories
              </ProofSummaryCardText>
              {viewMoreStarred ? (
                <ProofSummaryCardTextDetail
                  onClick={() => setViewMoreStarred(false)}
                >
                  {data.starredProofDetails}
                </ProofSummaryCardTextDetail>
              ) : (
                <ProofSummaryCardSeeMore
                  onClick={() => setViewMoreStarred(true)}
                >
                  View Proof
                </ProofSummaryCardSeeMore>
              )}
            </ProofSummaryCardSection>
          )}

          {data?.sponsors && (
            <ProofSummaryCardSection>
              <ProofSummaryCardText>
                You have at least {data?.sponsorsThreshold} Sponsors
              </ProofSummaryCardText>
              {viewMoreSponsors ? (
                <ProofSummaryCardTextDetail
                  onClick={() => setViewMoreSponsors(false)}
                >
                  {data.sponsorsProofDetails}
                </ProofSummaryCardTextDetail>
              ) : (
                <ProofSummaryCardSeeMore
                  onClick={() => setViewMoreSponsors(true)}
                >
                  View Proof
                </ProofSummaryCardSeeMore>
              )}
            </ProofSummaryCardSection>
          )}

          {data?.organizations && (
            <ProofSummaryCardSection>
              <ProofSummaryCardText>
                You have at least in {data?.organizationsThreshold}{" "}
                organizations
              </ProofSummaryCardText>
              {viewMoreOrganizations ? (
                <ProofSummaryCardTextDetail
                  onClick={() => setViewMoreOrganizations(false)}
                >
                  {data.organizationsProofDetails}
                </ProofSummaryCardTextDetail>
              ) : (
                <ProofSummaryCardSeeMore
                  onClick={() => setViewMoreOrganizations(true)}
                >
                  View Proof
                </ProofSummaryCardSeeMore>
              )}
            </ProofSummaryCardSection>
          )}
        </ProofSummaryCardContent>
      )}
    </ProofSummaryCardContainer>
  );
};

export default memo(ProofSummaryCard);
