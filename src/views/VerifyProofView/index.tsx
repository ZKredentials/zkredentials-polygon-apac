import { FC, useEffect, useState } from "react";
import {
  GenericContainer,
  GenericTitle,
  GenericContent,
} from "../GenericLayout";
import { getIpfsData } from "@/utils/helper";
import ProofSummaryCard from "@/components/ProofSummaryCard";

interface IProps {
  cid: string;
}

interface IGithubProof {
  prs?: string;
  prsThreshold?: number;
  starred?: string;
  starredThreshold?: number;
  sponsors?: string;
  sponsorsThreshold?: number;
  contributedRepos?: string;
  contributedReposThreshold?: number;
  organizations?: string;
  organizationsThreshold?: number;
}

const VerifyProofView: FC<IProps> = ({ cid }) => {
  const [data, setData] = useState<IGithubProof>();
  const [loading, setLoading] = useState<boolean>(true);
  const [prsProofDetails, setPrsProofDetails] = useState<string>("");
  const [starredProofDetails, setStarredProofDetails] = useState<string>("");
  const [sponsorsProofDetails, setSponsorsProofDetails] = useState<string>("");
  const [contributedReposProofDetails, setContributedReposProofDetails] =
    useState<string>("");
  const [organizationsProofDetails, setOrganizationsProofDetails] =
    useState<string>("");

  const fetchProofIpfs = async () => {
    setLoading(true);
    if (cid) {
      const { data } = await getIpfsData(cid, "resume.json");
      console.log("data", data);
      setData({
        prs: data.prs || "",
        prsThreshold: data.prsThreshold || 0,
        starred: data.starred || "",
        starredThreshold: data.starredThreshold || 0,
        sponsors: data.sponsors || "",
        sponsorsThreshold: data.sponsorsThreshold || 0,
        contributedRepos: data.repositoriesContributedTo || "",
        contributedReposThreshold: data.repositoriesContributedToThreshold || 0,
        organizations: data.organizations || "",
        organizationsThreshold: data.organizationsThreshold || 0,
      });
    }
    setLoading(false);
  };

  const get = async (cid: string, fileName: string) => {
    const { data } = await getIpfsData(cid, fileName);
    return data;
  };

  const fetchProofJson = async () => {
    if (data?.prs) {
      const prs_response = await get(data.prs, "prsProof.json");
      setPrsProofDetails(JSON.stringify(prs_response.proof));
    }

    if (data?.starred) {
      const starred_response = await get(data.starred, "starredProof.json");
      setStarredProofDetails(JSON.stringify(starred_response.proof));
    }

    if (data?.sponsors) {
      const sponsor_response = await get(data.sponsors, "sponsorProof.json");
      setSponsorsProofDetails(JSON.stringify(sponsor_response.proof));
    }

    if (data?.contributedRepos) {
      const contributedRepos_response = await get(
        data.contributedRepos,
        "repositoriesContributedToProof.json"
      );
      setContributedReposProofDetails(
        JSON.stringify(contributedRepos_response.proof)
      );
    }

    if (data?.organizations) {
      const organizations_response = await get(
        data.organizations,
        "repositoriesContributedToProof.json"
      );
      setOrganizationsProofDetails(
        JSON.stringify(organizations_response.proof)
      );
    }
  };

  useEffect(() => {
    fetchProofIpfs();
  }, [cid]);

  useEffect(() => {
    if (data) {
      fetchProofJson();
    }
  }, [data]);

  return (
    <GenericContainer>
      <GenericTitle>ZKredentials Proof | {cid}</GenericTitle>
      <GenericContent>
        <ProofSummaryCard
          loading={loading}
          data={{
            ...data,
            prsProofDetails,
            starredProofDetails,
            sponsorsProofDetails,
            contributedReposProofDetails,
            organizationsProofDetails,
          }}
        />
      </GenericContent>
    </GenericContainer>
  );
};

export default VerifyProofView;
