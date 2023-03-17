import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { fetchCombinedContacts } from "@/utils/apiUtils";
import ContactList from "@/components/contact/ContactList";

const HomePage = ({ contacts }) => {
    return (
        <>
            <Head>
                <title>Contact List - SleekFlow</title>
                <meta
                    name="description"
                    content="View our list of contacts with their related information."
                />
            </Head>
            <Layout>
                <ContactList contactList={contacts} />
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    try {
        const combinedContacts = await fetchCombinedContacts(4);

        return {
            props: {
                contacts: combinedContacts.map((contact) => ({
                    id: contact.id,
                    name: contact.name,
                    image: contact.image,
                    status: contact.status,
                    species: contact.species,
                    gender: contact.gender,
                })),
            },
        };
    } catch (error) {
        console.log(error);
    }
};

export default HomePage;
