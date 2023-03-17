import Layout from "@/components/layout/Layout";
import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
    fetchCombinedContacts,
    fetchContact,
    fetchEpisode,
    getEpisodeNumbers,
} from "@/utils/apiUtils";
import ButtonIcon from "@/components/ui/ButtonIcon";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactEpisode from "@/components/contact/ContactEpisode";

const ContactPage = ({ contact, episode }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{`${contact.name} - SleekFlow`}</title>
                <meta
                    name="description"
                    content={`View information about ${contact.name}.`}
                />
            </Head>
            <Layout>
                <ButtonIcon Icon={CaretLeft} onClick={() => router.back()}>
                    <span className="text-left font-medium text-sm capitalize inline-block ml-2 leading-5">
                        Back
                        <span className="block font-light text-neutral-500">
                            to contacts
                        </span>
                    </span>
                </ButtonIcon>

                <ContactHeader
                    name={contact.name}
                    imageUrl={contact.imageUrl}
                />

                <ContactInfo
                    gender={contact.gender}
                    status={contact.status}
                    species={contact.species}
                    location={contact.location}
                    origin={contact.origin}
                />

                <ContactEpisode episodes={episode} />
            </Layout>
        </>
    );
};

export const getStaticPaths = async () => {
    const combinedContacts = await fetchCombinedContacts(4);

    return {
        fallback: false,
        paths: combinedContacts.map((contact) => ({
            params: { id: contact.id.toString() },
        })),
    };
};

export const getStaticProps = async (context) => {
    const params = context.params;
    const contactId = params.id;

    try {
        const contact = await fetchContact(contactId);
        const episodeNumber = getEpisodeNumbers(contact.episode);
        const episodeData = await fetchEpisode(episodeNumber);

        return {
            props: {
                contact: {
                    name: contact.name,
                    imageUrl: contact.image,
                    status: contact.status,
                    gender: contact.gender,
                    location: contact.location,
                    origin: contact.origin,
                    species: contact.species,
                },
                episode: Array.isArray(episodeData)
                    ? episodeData.map((data) => ({
                          name: data.name,
                          airDate: data.air_date,
                          episode: data.episode,
                      }))
                    : [
                          {
                              name: episodeData.name,
                              airDate: episodeData.air_date,
                              episode: episodeData.episode,
                          },
                      ],
            },
        };
    } catch (error) {
        console.log(error);
    }
};

export default ContactPage;
