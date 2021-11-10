import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import styles from "styles/noi-quy-quy-dinh/styles.module.scss";
import LPEBanner from "@/src/components/banner";

function RulesPage() {
  const { t } = useTranslation("rules");

  const rulesList = [
    {
      name: t("rules"),
      desc: t("rules_desciption"),
      linkPdf:
        "https://drive.google.com/file/d/1Qb2Mbwuv-8R_9lk00BLOkBNj01DNFNOi/view",
    },
    {
      name: t("policy"),
      desc: t("policy_desciption"),
      linkPdf:
        "https://drive.google.com/file/d/1XyQCG9YShj2kTQg9bvNvCtPDsJ15NEBk/view",
    },
    {
      name: t("policy_online"),
      desc: t("policy_online_description"),
      linkPdf:
        "https://drive.google.com/file/d/1BnJoDxlXjLxtKMmf2mHNJREkR-zuIoB0/view",
    },
  ];

  return (
    <>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>

        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        {/* Background Title */}
        <LPEBanner
          bannerImg="https://cxp.asia/2020/wp-content/uploads/2021/05/company-culture.jpg"
          headText="Hãy cùng với chúng tôi tìm hiểu thêm về LPE"
          subText="Nội quy và chính sách để phục vụ khách hàng tốt hơn"
        />

        <div className="container">
          <h1 className={styles.heading}>{t("rule_heading")}</h1>

          <div className="row pb-5">
            {rulesList.map((rule, index) => {
              return (
                <div className="col-12 col-md-4" key={index}>
                  <div className={styles.boxRule}>
                    <h3>{rule.name}</h3>

                    <p className="text-secondary">{rule.desc}</p>

                    <a href={rule.linkPdf} target="_blank">
                      {t("read_more")}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default RulesPage;
