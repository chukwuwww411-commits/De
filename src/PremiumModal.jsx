import React, { useEffect, useRef, useState } from "react";

const PREMIUM_PRICE = "9.99";

function loadPayPalSDK(clientId) {
  return new Promise((resolve, reject) => {
    if (window.paypal) return resolve(window.paypal);
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error("Failed to load PayPal SDK"));
    document.head.appendChild(script);
  });
}

export default function PremiumModal({ onClose }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const clientId = import.meta.env.PAYPAL_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      setStatus("error");
      setErrorMsg("PayPal is not configured yet. Please check back soon.");
      return;
    }

    let cancelled = false;

    loadPayPalSDK(clientId)
      .then((paypal) => {
        if (cancelled || !containerRef.current) return;
        paypal
          .Buttons({
            style: { layout: "vertical", color: "blue", shape: "pill", label: "pay" },
            createOrder: (data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: { value: PREMIUM_PRICE, currency_code: "USD" },
                    description: "AviatoHub Premium Access",
                  },
                ],
              }),
            onApprove: (data, actions) =>
              actions.order.capture().then(() => {
                setStatus("success");
              }),
            onError: () => {
              setStatus("error");
              setErrorMsg("Payment could not be completed. Please try again.");
            },
          })
          .render(containerRef.current);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
        setErrorMsg("Failed to load PayPal. Please try again.");
      });

    return () => {
      cancelled = true;
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [clientId]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {status === "success" ? (
          <div className="modal-success">
            <div className="modal-success-icon">✅</div>
            <h3>Welcome to AviatoHub Premium!</h3>
            <p>Your payment was successful. Enjoy exclusive content and resources.</p>
            <button className="btn btn-primary" onClick={onClose}>
              Start Exploring
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Unlock AviatoHub Premium</h3>
            <p className="modal-desc">
              Get premium content, exclusive resources, and additional downloads.
            </p>
            <div className="modal-price">
              <span className="modal-price-amount">${PREMIUM_PRICE}</span>
              <span className="modal-price-period">one-time</span>
            </div>
            <div className="modal-features">
              <div className="modal-feature">✓ Premium content access</div>
              <div className="modal-feature">✓ Exclusive resources</div>
              <div className="modal-feature">✓ Additional downloads</div>
            </div>
            {status === "error" && <p className="modal-error">{errorMsg}</p>}
            {status === "loading" && <p className="modal-loading">Loading PayPal…</p>}
            <div ref={containerRef} className="paypal-buttons" />
          </>
        )}
      </div>
    </div>
  );
}
