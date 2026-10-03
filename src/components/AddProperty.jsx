import { useState } from "react";

function AddProperty({
  addProperty,
  setPage,
}) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [type, setType] =
    useState("Apartment");

  const [status, setStatus] =
    useState("For Sale");

  const [city, setCity] =
    useState("");

  const [neighborhood, setNeighborhood] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [currency, setCurrency] =
    useState("USD");

  const [bedrooms, setBedrooms] =
    useState("");

  const [bathrooms, setBathrooms] =
    useState("");

  const [area, setArea] =
    useState("");

  const [parking, setParking] =
    useState("");

  const [yearBuilt, setYearBuilt] =
    useState("");

  const [furnished, setFurnished] =
    useState(false);

  const [balcony, setBalcony] =
    useState(false);

  const [garden, setGarden] =
    useState(false);

  const [pool, setPool] =
    useState(false);

  const [security, setSecurity] =
    useState(false);

  const [internet, setInternet] =
    useState(false);

  const [airConditioning, setAirConditioning] =
    useState(false);

  const [agentName, setAgentName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [image, setImage] =
    useState("");

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newProperty = {
      title,
      description,
      type,
      status,
      price: Number(price),
      currency,
      location: `${neighborhood}, ${city}`,
      address,
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      area: Number(area),
      parking: Number(parking || 0),
      yearBuilt: Number(yearBuilt || 0),
      furnished,
      balcony,
      garden,
      pool,
      security,
      internet,
      airConditioning,
      agentName,
      phone,
      email,
      image,
    };

    addProperty(newProperty);
  }

  return (
    <main className="add-property-page">
      <button
        className="back-btn"
        type="button"
        onClick={() => setPage("home")}
      >
        ← Back to marketplace
      </button>

      <div className="form-heading">
        <span className="section-label">
          LIST YOUR PROPERTY
        </span>

        <h1>Add Your Property</h1>

        <p>
          Provide the details below to publish your
          property on EstateHub.
        </p>
      </div>

      <form
        className="property-form"
        onSubmit={handleSubmit}
      >
        <div className="form-section">
          <div className="form-section-heading">
            <span>01</span>

            <div>
              <h2>Basic Information</h2>

              <p>
                Tell buyers about your property.
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group full">
              <label>Property Title</label>

              <input
                type="text"
                placeholder="e.g. Modern 4-Bedroom Villa"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group full">
              <label>Description</label>

              <textarea
                placeholder="Describe the property..."
                value={description}
                onChange={(event) =>
                  setDescription(
                    event.target.value
                  )
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Property Type</label>

              <select
                value={type}
                onChange={(event) =>
                  setType(event.target.value)
                }
              >
                <option value="Apartment">
                  Apartment
                </option>

                <option value="House">
                  House
                </option>

                <option value="Villa">
                  Villa
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Listing Type</label>

              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value)
                }
              >
                <option value="For Sale">
                  For Sale
                </option>

                <option value="For Rent">
                  For Rent
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading">
            <span>02</span>

            <div>
              <h2>Location</h2>

              <p>
                Where is the property located?
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                placeholder="e.g. Addis Ababa"
                value={city}
                onChange={(event) =>
                  setCity(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Neighborhood</label>

              <input
                type="text"
                placeholder="e.g. Bole"
                value={neighborhood}
                onChange={(event) =>
                  setNeighborhood(
                    event.target.value
                  )
                }
                required
              />
            </div>

            <div className="form-group full">
              <label>Full Address</label>

              <input
                type="text"
                placeholder="Street, building or house number"
                value={address}
                onChange={(event) =>
                  setAddress(event.target.value)
                }
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading">
            <span>03</span>

            <div>
              <h2>Pricing & Details</h2>

              <p>
                Add the key information about the
                property.
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                min="0"
                placeholder="Enter price"
                value={price}
                onChange={(event) =>
                  setPrice(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Currency</label>

              <select
                value={currency}
                onChange={(event) =>
                  setCurrency(event.target.value)
                }
              >
                <option value="USD">USD</option>

                <option value="ETB">ETB</option>
              </select>
            </div>

            <div className="form-group">
              <label>Bedrooms</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={bedrooms}
                onChange={(event) =>
                  setBedrooms(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Bathrooms</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={bathrooms}
                onChange={(event) =>
                  setBathrooms(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Area (m²)</label>

              <input
                type="number"
                min="0"
                placeholder="e.g. 250"
                value={area}
                onChange={(event) =>
                  setArea(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Parking Spaces</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={parking}
                onChange={(event) =>
                  setParking(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Year Built</label>

              <input
                type="number"
                min="1800"
                placeholder="e.g. 2024"
                value={yearBuilt}
                onChange={(event) =>
                  setYearBuilt(event.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading">
            <span>04</span>

            <div>
              <h2>Amenities</h2>

              <p>
                Select everything your property offers.
              </p>
            </div>
          </div>

          <div className="amenities-grid">
            <label className="amenity">
              <input
                type="checkbox"
                checked={furnished}
                onChange={(event) =>
                  setFurnished(
                    event.target.checked
                  )
                }
              />

              <span>Furnished</span>
            </label>

            <label className="amenity">
              <input
                type="checkbox"
                checked={balcony}
                onChange={(event) =>
                  setBalcony(
                    event.target.checked
                  )
                }
              />

              <span>Balcony</span>
            </label>

            <label className="amenity">
              <input
                type="checkbox"
                checked={garden}
                onChange={(event) =>
                  setGarden(
                    event.target.checked
                  )
                }
              />

              <span>Garden</span>
            </label>

            <label className="amenity">
              <input
                type="checkbox"
                checked={pool}
                onChange={(event) =>
                  setPool(event.target.checked)
                }
              />

              <span>Swimming Pool</span>
            </label>

            <label className="amenity">
              <input
                type="checkbox"
                checked={security}
                onChange={(event) =>
                  setSecurity(
                    event.target.checked
                  )
                }
              />

              <span>Security</span>
            </label>

            <label className="amenity">
              <input
                type="checkbox"
                checked={internet}
                onChange={(event) =>
                  setInternet(
                    event.target.checked
                  )
                }
              />

              <span>Internet</span>
            </label>

            <label className="amenity">
              <input
                type="checkbox"
                checked={airConditioning}
                onChange={(event) =>
                  setAirConditioning(
                    event.target.checked
                  )
                }
              />

              <span>Air Conditioning</span>
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading">
            <span>05</span>

            <div>
              <h2>Property Photo</h2>

              <p>
                Upload a photo of your property.
              </p>
            </div>
          </div>

          <label className="image-upload">
            {image ? (
              <img
                src={image}
                alt="Property preview"
                className="image-preview"
              />
            ) : (
              <div className="upload-placeholder">
                <div className="upload-icon">
                  ↑
                </div>

                <strong>
                  Choose a property photo
                </strong>

                <span>
                  Click here to browse your device
                </span>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
        </div>

        <div className="form-section">
          <div className="form-section-heading">
            <span>06</span>

            <div>
              <h2>Contact Information</h2>

              <p>
                How can interested buyers contact
                you?
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Owner / Agent Name</label>

              <input
                type="text"
                placeholder="Your name"
                value={agentName}
                onChange={(event) =>
                  setAgentName(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="+251..."
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                required
              />
            </div>

            <div className="form-group full">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => setPage("home")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="publish-btn"
          >
            Publish Property →
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddProperty;