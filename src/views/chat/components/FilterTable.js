import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";

import { cilFilter, cilReload} from "@coreui/icons";

import { CustomCFormSelectGroup } from "src/components/common/CustomCInputGroup";
import { t } from "i18next";

const FilterTable = ({
  filters,
  filterErrors,
  handleFilterChange,
  handleFilterSubmit,
  questions,
  handleClearFilter,
  reloadData, 
  filterOptions
}) => {
  const [showFilterData, setShowFilterData] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2 justify-between mb-4 text-sm">
        <div className="grid justify-start text-sm mb-6">
        <CButton
            color="info"
            variant="outline"
            onClick={reloadData}
          >
            <CIcon icon={cilReload} />{" "}
          </CButton>
        </div>
        <div className="grid justify-end text-sm mb-6">
          <CButton
            color="info"
            variant="outline"
            onClick={() => setShowFilterData(!showFilterData)}
          >
            <CIcon icon={cilFilter} />{" "}
            <span className="text-sm">{t("show_filters")}</span>
          </CButton>
        </div>

        <div className="row g-3 text-sm" hidden={!showFilterData}>
          <CustomCFormSelectGroup
            inputClassName="text-sm"
            hidden={!questions}
            label="Account Status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            error={filterErrors.status}
            uppercase={true}
            required={false}
            mdSize={4}
            options={[
              { value: "Yet to be picked", label: "Yet to be picked" },
              { value: "Ongoing", label: "Ongoing" },
              { value: "Assigned", label: "Assigned" },
              { value: "Assistance", label: "Assistance" },
              { value: "Ended", label: "Ended" },
              { value: "Time up", label: "Time up" },
            ]}
          />
          <CustomCFormSelectGroup
            inputClassName="text-sm"
            hidden={!questions}
            label="Country"
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            error={filterErrors.country}
            uppercase={true}
            required={false}
            mdSize={4}
            options={filterOptions?.filterCountries}
          />
        </div>
        <div className="flex flex-row justify-end">
          <div className="felx-row px-4 justify-end" hidden={!showFilterData}>
            <CButton
              color="primary"
              variant="outline"
              onClick={handleFilterSubmit}
            >
              <CIcon icon={cilFilter} />{" "}
              <span className="text-sm">{t("filter")}</span>
            </CButton>
          </div>
          <div className="felx-row justify-end" hidden={!showFilterData}>
            <CButton
              color="primary"
              variant="outline"
              onClick={handleClearFilter}
            >
              <CIcon icon={cilFilter} />{" "}
              <span className="text-sm">{t("clear_filter")}</span>
            </CButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterTable;
